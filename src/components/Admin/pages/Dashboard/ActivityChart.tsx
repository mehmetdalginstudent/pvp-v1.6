import React from 'react';
import { Calendar } from 'lucide-react';

export const ActivityChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Aktivite Grafiği</h3>
        <div className="flex items-center gap-4">
          <select className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500">
            <option value="7">Son 7 gün</option>
            <option value="30">Son 30 gün</option>
            <option value="90">Son 90 gün</option>
          </select>
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Tarih Seç</span>
          </button>
        </div>
      </div>

      <div className="h-80 flex items-center justify-center text-gray-500">
        Grafik bileşeni buraya eklenecek
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <p className="text-sm text-gray-600">Sorular</p>
          <p className="text-2xl font-semibold text-blue-600">+24%</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Cevaplar</p>
          <p className="text-2xl font-semibold text-green-600">+18%</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Etkileşim</p>
          <p className="text-2xl font-semibold text-purple-600">+32%</p>
        </div>
      </div>
    </div>
  );
};