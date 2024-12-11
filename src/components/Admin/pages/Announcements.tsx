import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Plus, Edit2, Trash2, X, Eye, Power } from 'lucide-react';
import { TickerItem } from '../../../components/NewsTicker/types';
import { useAnnouncementStore } from '../../../store/announcementStore';

export const Announcements: React.FC = () => {
  const { 
    announcements, 
    addAnnouncement, 
    updateAnnouncement, 
    deleteAnnouncement,
    togglePublish 
  } = useAnnouncementStore();
  
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<TickerItem | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [editorContent, setEditorContent] = useState('');
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!title.trim() || !editorContent.trim()) return;
    
    addAnnouncement({
      text: title,
      content: editorContent
    });
    
    setIsEditorOpen(false);
    setEditorContent('');
    setTitle('');
  };

  const handleUpdate = () => {
    if (!selectedAnnouncement) return;

    updateAnnouncement(selectedAnnouncement.id, {
      text: title,
      content: editorContent
    });

    setIsEditorOpen(false);
    setSelectedAnnouncement(null);
    setEditorContent('');
    setTitle('');
  };

  const handleEdit = (announcement: TickerItem) => {
    setSelectedAnnouncement(announcement);
    setTitle(announcement.text);
    setEditorContent(announcement.content || '');
    setIsEditorOpen(true);
  };

  const handleView = (announcement: TickerItem) => {
    setSelectedAnnouncement(announcement);
    setIsViewModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Duyurular</h2>
        <button
          onClick={() => setIsEditorOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          <Plus size={20} />
          Yeni Duyuru
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{announcement.text}</h3>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => togglePublish(announcement.id)}
                    className={`p-2 ${
                      announcement.published 
                        ? 'text-green-600 hover:text-green-700' 
                        : 'text-gray-400 hover:text-gray-500'
                    }`}
                    title={announcement.published ? 'Yayından Kaldır' : 'Yayınla'}
                  >
                    <Power size={18} />
                  </button>
                  <button
                    onClick={() => handleView(announcement)}
                    className="p-2 text-gray-600 hover:text-blue-600"
                    title="Görüntüle"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleEdit(announcement)}
                    className="p-2 text-gray-600 hover:text-blue-600"
                    title="Düzenle"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => deleteAnnouncement(announcement.id)}
                    className="p-2 text-gray-600 hover:text-red-600"
                    title="Sil"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editor Modal */}
      {isEditorOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">
                {selectedAnnouncement ? 'Duyuru Düzenle' : 'Yeni Duyuru'}
              </h3>
              <button
                onClick={() => {
                  setIsEditorOpen(false);
                  setSelectedAnnouncement(null);
                  setEditorContent('');
                  setTitle('');
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duyuru Başlığı
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Duyuru başlığı..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duyuru İçeriği
                </label>
                <Editor
                  apiKey='yh1wtyolp1mbkc8xj9m99oqup06cxs8j176whkjuhmj61i8h'
                  value={editorContent}
                  onEditorChange={(content) => setEditorContent(content)}
                  init={{
                    height: 400,
                    menubar: false,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'emoticons'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | emoticons | help',
                    content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 16px }'
                  }}
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    setIsEditorOpen(false);
                    setSelectedAnnouncement(null);
                    setEditorContent('');
                    setTitle('');
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  İptal
                </button>
                <button
                  onClick={selectedAnnouncement ? handleUpdate : handleAdd}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {selectedAnnouncement ? 'Güncelle' : 'Ekle'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {isViewModalOpen && selectedAnnouncement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">{selectedAnnouncement.text}</h3>
              <button
                onClick={() => {
                  setIsViewModalOpen(false);
                  setSelectedAnnouncement(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedAnnouncement.content || '' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};