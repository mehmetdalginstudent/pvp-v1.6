import React from 'react';
import { useSettingsStore } from '../../../../../../store/settingsStore';
import { Gauge, Database, Zap, Image } from 'lucide-react';

export const PerformanceSettings: React.FC = () => {
  const { settings, updateSettings } = useSettingsStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            <h4 className="font-medium text-gray-900">Önbellek</h4>
          </div>
          <p className="text-sm text-gray-600 mt-1">Sayfa yükleme hızını artırmak için önbelleği etkinleştirin</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.performance.cacheEnabled}
            onChange={(e) => updateSettings('performance', { cacheEnabled: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <div className="flex items-center gap-2">
            <Gauge className="w-5 h-5 text-green-600" />
            Önbellek Süresi (saniye)
          </div>
        </label>
        <input
          type="number"
          min="60"
          max="86400"
          value={settings.performance.cacheDuration}
          onChange={(e) => updateSettings('performance', { cacheDuration: parseInt(e.target.value) })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-600" />
            <h4 className="font-medium text-gray-900">Sıkıştırma</h4>
          </div>
          <p className="text-sm text-gray-600 mt-1">Sayfa yükleme süresini azaltmak için içeriği sıkıştırın</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.performance.compressionEnabled}
            onChange={(e) => updateSettings('performance', { compressionEnabled: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <Image className="w-5 h-5 text-orange-600" />
            <h4 className="font-medium text-gray-900">Lazy Loading</h4>
          </div>
          <p className="text-sm text-gray-600 mt-1">Görüntüleri ve içeriği gerektiğinde yükle</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.performance.lazyLoading}
            onChange={(e) => updateSettings('performance', { lazyLoading: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};