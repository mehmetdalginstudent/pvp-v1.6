import React from 'react';
import { BarChart2 } from 'lucide-react';

export const EngagementMetrics: React.FC = () => {
  const metrics = [
    { label: 'Ortalama Okunma Süresi', value: '4.2 dk', trend: '+8%' },
    { label: 'Sayfa Başı Etkileşim', value: '2.8', trend: '+15%' },
    { label: 'Geri Dönüş Oranı', value: '42%', trend: '-5%' },
    { label: 'Kullanıcı Memnuniyeti', value: '4.6/5', trend: '+2%' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Etkileşim Metrikleri</h3>
        <BarChart2 className="w-5 h-5 text-gray-500" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-semibold text-gray-800">{metric.value}</p>
              <span className={`text-sm font-medium ${
                metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {metric.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};