import React from 'react';
import { Globe, Mail, Shield, Database, Palette, Bell, Gauge } from 'lucide-react';
import { sections } from './sections.config';

interface SettingsSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  activeSection,
  onSectionChange
}) => {
  return (
    <div className="lg:col-span-1 space-y-1">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
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
  );
};