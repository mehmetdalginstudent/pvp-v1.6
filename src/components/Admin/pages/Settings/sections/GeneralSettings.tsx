import React from 'react';
import { useSettingsStore } from '../../../../../store/settingsStore';

export const GeneralSettings: React.FC = () => {
  const { settings, updateSettings } = useSettingsStore();

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Site Başlığı
        </label>
        <input
          type="text"
          value={settings.general.siteTitle}
          onChange={(e) => updateSettings('general', { siteTitle: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Site Açıklaması
        </label>
        <textarea
          value={settings.general.siteDescription}
          onChange={(e) => updateSettings('general', { siteDescription: e.target.value })}
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
            onChange={(e) => updateSettings('general', { language: e.target.value })}
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
            onChange={(e) => updateSettings('general', { timezone: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="Europe/Istanbul">İstanbul (UTC+3)</option>
            <option value="Europe/London">London (UTC+0)</option>
          </select>
        </div>
      </div>
    </div>
  );
};