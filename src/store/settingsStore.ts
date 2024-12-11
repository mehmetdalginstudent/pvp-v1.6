```typescript
import { create } from 'zustand';

interface Settings {
  general: {
    siteTitle: string;
    siteDescription: string;
    language: string;
    timezone: string;
  };
  email: {
    smtpServer: string;
    smtpPort: string;
    smtpUsername: string;
    smtpPassword: string;
    senderName: string;
    senderEmail: string;
    encryption: 'none' | 'tls' | 'ssl';
    templates: {
      welcome: string;
      passwordReset: string;
      notification: string;
    };
  };
  security: {
    enableTwoFactor: boolean;
    requireEmailVerification: boolean;
    passwordMinLength: number;
    sessionTimeout: number;
  };
  notifications: {
    newQuestionAlert: boolean;
    newAnswerAlert: boolean;
    systemUpdates: boolean;
    emailDigest: 'never' | 'daily' | 'weekly' | 'monthly';
  };
  performance: {
    cacheEnabled: boolean;
    cacheDuration: number;
    compressionEnabled: boolean;
    lazyLoading: boolean;
  };
}

interface SettingsStore {
  settings: Settings;
  updateSettings: (section: keyof Settings, values: Partial<Settings[keyof Settings]>) => void;
  saveSettings: () => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  settings: {
    general: {
      siteTitle: 'PDR Portal',
      siteDescription: 'Profesyonel gelişiminiz için vaka paylaşımı ve süpervizyon platformu',
      language: 'tr',
      timezone: 'Europe/Istanbul'
    },
    email: {
      smtpServer: '',
      smtpPort: '587',
      smtpUsername: '',
      smtpPassword: '',
      senderName: 'PDR Portal',
      senderEmail: 'noreply@pdrportal.com',
      encryption: 'tls',
      templates: {
        welcome: '',
        passwordReset: '',
        notification: ''
      }
    },
    security: {
      enableTwoFactor: false,
      requireEmailVerification: true,
      passwordMinLength: 8,
      sessionTimeout: 60
    },
    notifications: {
      newQuestionAlert: true,
      newAnswerAlert: true,
      systemUpdates: true,
      emailDigest: 'daily'
    },
    performance: {
      cacheEnabled: true,
      cacheDuration: 3600,
      compressionEnabled: true,
      lazyLoading: true
    }
  },

  updateSettings: (section, values) => set((state) => ({
    settings: {
      ...state.settings,
      [section]: {
        ...state.settings[section],
        ...values
      }
    }
  })),

  saveSettings: () => {
    // Here you would typically save to a backend
    console.log('Settings saved');
  }
}));
```