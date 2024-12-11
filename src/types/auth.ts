export interface User {
  id: string;
  email: string;
  username: string;
  city: string;
  institutionType: 'anaokul' | 'ilkokul' | 'ortaokul' | 'lise';
  institutionName: string;
  created_at: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  username: string;
  city: string;
  institutionType: 'anaokul' | 'ilkokul' | 'ortaokul' | 'lise';
  institutionName: string;
}