import React from 'react';
import { Mail } from 'lucide-react';
import { useSettingsStore } from '../../../../../../store/settingsStore';

const templates = [
  { id: 'welcome', name: 'Hoş Geldiniz', description: 'Yeni kullanıcı kayıt e-postası' },
  { id: 'passwordReset', name: 'Şifre Sıfırlama', description: 'Şifre sıfırlama talebi e-postası' },
  { id: 'notification', name: 'Bildirim', description: 'Genel bildirim e-postası' }
];

export const EmailTemplates: React.FC = () => {
  const { settings, updateSettings } = useSettingsStore();

  const handleTemplateEdit = (templateId: string) => {
    // Template düzenleme modalını aç
    console.log('Edit template:', templateId);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-medium text-gray-900">E-posta Şablonları</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleTemplateEdit(template.id)}
              className="text-left p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h4 className="font-medium text-gray-900 mb-1">{template.name}</h4>
              <p className="text-sm text-gray-500">{template.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};