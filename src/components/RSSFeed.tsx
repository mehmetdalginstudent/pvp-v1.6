import React from 'react';
import { generateRSSFeed } from '../utils/rssGenerator';

export const RSSFeed: React.FC = () => {
  const rssContent = generateRSSFeed();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">RSS Feed</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">RSS Feed URL</h2>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={`${window.location.origin}/rss.xml`}
                readOnly
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 bg-gray-50"
              />
              <button
                onClick={() => navigator.clipboard.writeText(`${window.location.origin}/rss.xml`)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Kopyala
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">RSS İçeriği</h2>
            <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto text-sm">
              {rssContent}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};