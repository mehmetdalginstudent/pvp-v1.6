import React from 'react';
import { Server, Lock, User, Key, Mail } from 'lucide-react';
import { useSettingsStore } from '../../../../../../store/settingsStore';

export const SMTPConfig: React.FC = () => {
  const { settings, updateSettings } = useSettingsStore();

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Server className="w-5 h-5 text-gray-500" />
          <h3 className="text-lg font-medium text-gray-900">SMTP Sunucu Yapılandırması</h3>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SMTP Sunucu
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Server className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={settings.email.smtpServer}
                onChange={(e) => updateSettings('email', { smtpServer: e.target.value })}
                placeholder="smtp.example.com"
                className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Port
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                value={settings.email.smtpPort}
                onChange={(e) => updateSettings('email', { smtpPort: e.target.value })}
                placeholder="587"
                className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kullanıcı Adı
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={settings.email.smtpUsername}
                onChange={(e) => updateSettings('email', { smtpUsername: e.target.value })}
                placeholder="username@example.com"
                className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şifre
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                value={settings.email.smtpPassword}
                onChange={(e) => updateSettings('email', { smtpPassword: e.target.value })}
                placeholder="••••••••"
                className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gönderen Adı
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={settings.email.senderName}
                onChange={(e) => updateSettings('email', { senderName: e.target.value })}
                placeholder="PDR Portal"
                className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gönderen E-posta
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={settings.email.senderEmail}
                onChange={(e) => updateSettings('email', { senderEmail: e.target.value })}
                placeholder="noreply@example.com"
                className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};