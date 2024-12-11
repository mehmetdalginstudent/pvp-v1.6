import React, { useState } from 'react';
import { Save, Globe, Mail, Shield, Database, Palette, Bell, Gauge } from 'lucide-react';

interface SettingsSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [settings, setSettings] = useState({
    general: {
      siteTitle: 'PDR Portal',
      siteDescription: 'Profesyonel gelişiminiz için vaka paylaşımı ve süpervizyon platformu',
      language: 'tr',
      timezone: 'Europe/Istanbul'
    },
    email: {
      smtpServer: '',
      smtpPort: '',
      smtpUsername: '',
      smtpPassword: '',
      senderName: '',
      senderEmail: ''
    },
    security: {
      enableTwoFactor: false,
      requireEmailVerification: true,
      passwordMinLength: 8,
      sessionTimeout: 60
    },
    database: {
      backupFrequency: 'daily',
      retentionDays: 30,
      compressionEnabled: true
    },
    appearance: {
      theme: 'light',
      primaryColor: '#2563eb',
      fontFamily: 'Inter',
      enableDarkMode: true
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
  });

  const sections: SettingsSection[] = [
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
      id: 'database',
      title: 'Veritabanı',
      icon: <Database className="w-5 h-5" />,
      description: 'Yedekleme ve bakım ayarları'
    },
    {
      id: 'appearance',
      title: 'Görünüm',
      icon: <Palette className="w-5 h-5" />,
      description: 'Tema ve görsel özelleştirmeler'
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

  const handleSave = () => {
    // Save settings logic
    console.log('Settings saved:', settings);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'general':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Site Başlığı
              </label>
              <input
                type="text"
                value={settings.general.siteTitle}
                onChange={(e) => setSettings({
                  ...settings,
                  general: { ...settings.general, siteTitle: e.target.value }
                })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Site Açıklaması
              </label>
              <textarea
                value={settings.general.siteDescription}
                onChange={(e) => setSettings({
                  ...settings,
                  general: { ...settings.general, siteDescription: e.target.value }
                })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dil
                </label>
                <select
                  value={settings.general.language}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: { ...settings.general, language: e.target.value }
                  })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="tr">Türkçe</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Saat Dilimi
                </label>
                <select
                  value={settings.general.timezone}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: { ...settings.general, timezone: e.target.value }
                  })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="Europe/Istanbul">İstanbul (UTC+3)</option>
                  <option value="Europe/London">London (UTC+0)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">İki Faktörlü Doğrulama</h4>
                <p className="text-sm text-gray-600">Hesap güvenliğini artırmak için iki faktörlü doğrulamayı etkinleştirin</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.security.enableTwoFactor}
                  onChange={(e) => setSettings({
                    ...settings,
                    security: { ...settings.security, enableTwoFactor: e.target.checked }
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">E-posta Doğrulama</h4>
                <p className="text-sm text-gray-600">Yeni kullanıcılar için e-posta doğrulaması zorunlu olsun</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.security.requireEmailVerification}
                  onChange={(e) => setSettings({
                    ...settings,
                    security: { ...settings.security, requireEmailVerification: e.target.checked }
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Şifre Uzunluğu
              </label>
              <input
                type="number"
                min="6"
                max="32"
                value={settings.security.passwordMinLength}
                onChange={(e) => setSettings({
                  ...settings,
                  security: { ...settings.security, passwordMinLength: parseInt(e.target.value) }
                })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Oturum Zaman Aşımı (dakika)
              </label>
              <input
                type="number"
                min="5"
                max="1440"
                value={settings.security.sessionTimeout}
                onChange={(e) => setSettings({
                  ...settings,
                  security: { ...settings.security, sessionTimeout: parseInt(e.target.value) }
                })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Yeni Soru Bildirimi</h4>
                <p className="text-sm text-gray-600">Yeni bir soru eklendiğinde bildirim al</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.newQuestionAlert}
                  onChange={(e) => setSettings({
                    ...settings,
                    notifications: { ...settings.notifications, newQuestionAlert: e.target.checked }
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Yeni Cevap Bildirimi</h4>
                <p className="text-sm text-gray-600">Yeni bir cevap eklendiğinde bildirim al</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.newAnswerAlert}
                  onChange={(e) => setSettings({
                    ...settings,
                    notifications: { ...settings.notifications, newAnswerAlert: e.target.checked }
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-posta Özeti
              </label>
              <select
                value={settings.notifications.emailDigest}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, emailDigest: e.target.value }
                })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option value="never">Hiçbir zaman</option>
                <option value="daily">Günlük</option>
                <option value="weekly">Haftalık</option>
                <option value="monthly">Aylık</option>
              </select>
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Önbellek</h4>
                <p className="text-sm text-gray-600">Sayfa yükleme hızını artırmak için önbelleği etkinleştirin</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.performance.cacheEnabled}
                  onChange={(e) => setSettings({
                    ...settings,
                    performance: { ...settings.performance, cacheEnabled: e.target.checked }
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Önbellek Süresi (saniye)
              </label>
              <input
                type="number"
                min="60"
                max="86400"
                value={settings.performance.cacheDuration}
                onChange={(e) => setSettings({
                  ...settings,
                  performance: { ...settings.performance, cacheDuration: parseInt(e.target.value) }
                })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Lazy Loading</h4>
                <p className="text-sm text-gray-600">Görüntüleri ve içeriği gerektiğinde yükle</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.performance.lazyLoading}
                  onChange={(e) => setSettings({
                    ...settings,
                    performance: { ...settings.performance, lazyLoading: e.target.checked }
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Ayarlar</h2>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          <Save size={20} />
          Kaydet
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {section.icon}
              <div className="text-left">
                <div className="font-medium">{section.title}</div>
                <div className="text-sm text-gray-500">{section.description}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow p-6">
            {renderSectionContent()}
          </div>
        </div>
      </div>
    </div>
  );
};