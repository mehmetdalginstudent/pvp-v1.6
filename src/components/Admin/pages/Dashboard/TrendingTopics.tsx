import React from 'react';
import { TrendingUp } from 'lucide-react';

export const TrendingTopics: React.FC = () => {
  const topics = [
    { name: 'Sınav Kaygısı', count: 156, trend: '+12%' },
    { name: 'Akran Zorbalığı', count: 142, trend: '+8%' },
    { name: 'Aile İçi İletişim', count: 128, trend: '+15%' },
    { name: 'Kariyer Planlaması', count: 98, trend: '+5%' },
    { name: 'Okul Uyumu', count: 87, trend: '+3%' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Trend Konular</h3>
        <TrendingUp className="w-5 h-5 text-gray-500" />
      </div>

      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div>
              <p className="font-medium text-gray-800">{topic.name}</p>
              <p className="text-sm text-gray-500">{topic.count} tartışma</p>
            </div>
            <span className="text-green-500 text-sm font-medium">{topic.trend}</span>
          </div>
        ))}
      </div>
    </div>
  );
};