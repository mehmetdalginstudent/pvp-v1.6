```tsx
import React from 'react';
import { Globe, Mail, Shield, Database, Palette, Bell, Gauge } from 'lucide-react';

export const sections = [
  {
    id: 'general',
    title: 'Genel Ayarlar',
    icon: <Globe className="w-5 h-5" />,
    description: 'Site başlığı, açıklama ve temel yapılandırma'
  },
  {
    id: 'email',
    title: 'E-posta Ayarları',
    icon: <Mail className="w-5 h-5" />,
    description: 'SMTP yapılandırması ve e-posta şablonları'
  },
  {
    id: 'security',
    title: 'Güvenlik',
    icon: <Shield className="w-5 h-5" />,
    description: 'Güvenlik politikaları ve erişim kontrolü'
  },
  {
    id: 'notifications',
    title: 'Bildirimler',
    icon: <Bell className="w-5 h-5" />,
    description: 'Bildirim tercihleri ve yapılandırması'
  },
  {
    id: 'performance',
    title: 'Performans',
    icon: <Gauge className="w-5 h-5" />,
    description: 'Önbellek ve optimizasyon ayarları'
  }
];
```