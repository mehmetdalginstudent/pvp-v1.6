```tsx
import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { SettingsSidebar } from './SettingsSidebar';
import { GeneralSettings } from './sections/GeneralSettings';
import { EmailSettings } from './sections/EmailSettings';
import { SecuritySettings } from './sections/SecuritySettings';
import { NotificationSettings } from './sections/NotificationSettings';
import { PerformanceSettings } from './sections/PerformanceSettings';
import { useSettingsStore } from '../../../../store/settingsStore';

export const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('general');
  const { saveSettings } = useSettingsStore();

  const handleSave = () => {
    saveSettings();
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'general':
        return <GeneralSettings />;
      case 'email':
        return <EmailSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'performance':
        return <PerformanceSettings />;
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
        <SettingsSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow p-6">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};
```