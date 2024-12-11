import { create } from 'zustand';
import { AuthState, LoginCredentials, RegisterData } from '../types/auth';
import { supabase } from '../lib/supabase';

interface AuthStore extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  error: null,

  login: async (credentials) => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) throw error;

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();

      set({ user: profile, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  register: async (data) => {
    try {
      set({ loading: true, error: null });
      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;

      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              username: data.username,
              city: data.city,
              institution_type: data.institutionType,
              institution_name: data.institutionName,
            },
          ]);

        if (profileError) throw profileError;

        set({
          user: {
            id: authData.user.id,
            email: data.email,
            username: data.username,
            city: data.city,
            institutionType: data.institutionType,
            institutionName: data.institutionName,
            created_at: new Date().toISOString(),
          },
          loading: false,
        });
      }
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  logout: async () => {
    try {
      set({ loading: true, error: null });
      await supabase.auth.signOut();
      set({ user: null, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  checkAuth: async () => {
    try {
      set({ loading: true, error: null });
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        set({ user: profile, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));