import React from 'react';
import { PieChart } from 'lucide-react';

export const CategoryDistribution: React.FC = () => {
  const categories = [
    { name: 'Bireysel', percentage: 35, color: 'bg-blue-500' },
    { name: 'Aile', percentage: 25, color: 'bg-green-500' },
    { name: 'Okul', percentage: 28, color: 'bg-purple-500' },
    { name: 'Kariyer', percentage: 12, color: 'bg-orange-500' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Kategori Dağılımı</h3>
        <PieChart className="w-5 h-5 text-gray-500" />
      </div>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">{category.name}</span>
              <span className="font-medium">{category.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${category.color} h-2 rounded-full`}
                style={{ width: `${category.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};