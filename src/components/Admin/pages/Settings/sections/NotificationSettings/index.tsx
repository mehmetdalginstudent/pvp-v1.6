import React from 'react';
import { useSettingsStore } from '../../../../../../store/settingsStore';
import { Bell, Mail, RefreshCw } from 'lucide-react';

export const NotificationSettings: React.FC = () => {
  const { settings, updateSettings } = useSettingsStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-600" />
            <h4 className="font-medium text-gray-900">Yeni Soru Bildirimi</h4>
          </div>
          <p className="text-sm text-gray-600 mt-1">Yeni bir soru eklendiğinde bildirim al</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.notifications.newQuestionAlert}
            onChange={(e) => updateSettings('notifications', { newQuestionAlert: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-green-600" />
            <h4 className="font-medium text-gray-900">Yeni Cevap Bildirimi</h4>
          </div>
          <p className="text-sm text-gray-600 mt-1">Yeni bir cevap eklendiğinde bildirim al</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.notifications.newAnswerAlert}
            onChange={(e) => updateSettings('notifications', { newAnswerAlert: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-purple-600" />
            E-posta Özeti
          </div>
        </label>
        <select
          value={settings.notifications.emailDigest}
          onChange={(e) => updateSettings('notifications', { emailDigest: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        >
          <option value="never">Hiçbir zaman</option>
          <option value="daily">Günlük</option>
          <option value="weekly">Haftalık</option>
          <option value="monthly">Aylık</option>
        </select>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-orange-600" />
            <h4 className="font-medium text-gray-900">Sistem Güncellemeleri</h4>
          </div>
          <p className="text-sm text-gray-600 mt-1">Sistem güncellemeleri hakkında bildirim al</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.notifications.systemUpdates}
            onChange={(e) => updateSettings('notifications', { systemUpdates: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};