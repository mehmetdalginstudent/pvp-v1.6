import React from 'react';
import { Save } from 'lucide-react';

interface BlogEditorToolbarProps {
  onSave: () => void;
}

export const BlogEditorToolbar: React.FC<BlogEditorToolbarProps> = ({ onSave }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-gray-800">Blog Yazısı Oluştur</h2>
    <button
      onClick={onSave}
      className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      <Save className="w-5 h-5" />
      Yayınla
    </button>
  </div>
);