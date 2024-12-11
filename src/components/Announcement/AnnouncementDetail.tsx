import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAnnouncementStore } from '../../store/announcementStore';
import { ArrowLeft } from 'lucide-react';

export const AnnouncementDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { announcements } = useAnnouncementStore();
  const announcement = announcements.find(a => a.id === Number(id));

  if (!announcement) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Duyuru bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Geri Dön
      </button>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">{announcement.text}</h1>
          
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: announcement.content || '' }}
          />
        </div>
      </article>
    </div>
  );
};