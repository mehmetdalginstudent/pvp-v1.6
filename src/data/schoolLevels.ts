import { SchoolLevelInfo } from '../types';

export const schoolLevels: Record<string, SchoolLevelInfo> = {
  anaokul: {
    title: 'Anaokulu PDR',
    icon: '🎨',
    description: 'Okul öncesi dönem psikolojik danışmanlık hizmetleri'
  },
  ilkokul: {
    title: 'İlkokul PDR',
    icon: '📚',
    description: 'İlkokul dönemi psikolojik danışmanlık hizmetleri'
  },
  ortaokul: {
    title: 'Ortaokul PDR',
    icon: '✏️',
    description: 'Ortaokul dönemi psikolojik danışmanlık hizmetleri'
  },
  lise: {
    title: 'Lise PDR',
    icon: '🎓',
    description: 'Lise dönemi psikolojik danışmanlık hizmetleri'
  }
};