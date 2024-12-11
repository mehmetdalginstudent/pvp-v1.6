import React from 'react';
import { useSettingsStore } from '../../../../../../store/settingsStore';
import { Shield, Lock, Mail, Clock } from 'lucide-react';

export const SecuritySettings: React.FC = () => {
  const { settings, updateSettings } = useSettingsStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <h4 className="font-medium text-gray-900">İki Faktörlü Doğrulama</h4>
          </div>
          <p className="text-sm text-gray-600 mt-1">Hesap güvenliğini artırmak için iki faktörlü doğrulamayı etkinleştirin</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.security.enableTwoFactor}
            onChange={(e) => updateSettings('security', { enableTwoFactor: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-green-600" />
            <h4 className="font-medium text-gray-900">E-posta Doğrulama</h4>
          </div>
          <p className="text-sm text-gray-600 mt-1">Yeni kullanıcılar için e-posta doğrulaması zorunlu olsun</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.security.requireEmailVerification}
            onChange={(e) => updateSettings('security', { requireEmailVerification: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-purple-600" />
            Minimum Şifre Uzunluğu
          </div>
        </label>
        <input
          type="number"
          min="6"
          max="32"
          value={settings.security.passwordMinLength}
          onChange={(e) => updateSettings('security', { passwordMinLength: parseInt(e.target.value) })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-600" />
            Oturum Zaman Aşımı (dakika)
          </div>
        </label>
        <input
          type="number"
          min="5"
          max="1440"
          value={settings.security.sessionTimeout}
          onChange={(e) => updateSettings('security', { sessionTimeout: parseInt(e.target.value) })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
};