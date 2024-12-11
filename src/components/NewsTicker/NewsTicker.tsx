import React, { useState } from 'react';
import { useTickerAnimation } from './useTickerAnimation';
import { Bell, X } from 'lucide-react';
import { useAnnouncementStore } from '../../store/announcementStore';

export const NewsTicker: React.FC = () => {
  const { containerRef } = useTickerAnimation();
  const { publishedAnnouncements } = useAnnouncementStore();
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  return (
    <>
      <div className="bg-blue-50 border-y border-blue-100 overflow-hidden py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center">
            <div className="flex items-center text-blue-600 mr-4">
              <Bell className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Duyurular:</span>
            </div>
            <div className="overflow-hidden relative flex-1">
              <div
                ref={containerRef}
                className="whitespace-nowrap inline-block animate-ticker"
              >
                {publishedAnnouncements.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedAnnouncement(item)}
                    className="inline-block mr-8 text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Announcement Modal */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl p-6 m-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{selectedAnnouncement.text}</h3>
              <button
                onClick={() => setSelectedAnnouncement(null)}
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
    </>
  );
};