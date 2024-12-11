import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, MessagesSquare, TrendingUp } from 'lucide-react';
import { StatCard } from './types';
import { getColorClasses } from './utils';

export const StatsGrid: React.FC = () => {
  const stats: StatCard[] = [
    {
      title: 'Toplam Kullanıcı',
      value: '1,234',
      trend: '+12%',
      icon: <Users className="w-8 h-8" />,
      color: 'blue',
      link: '/admin/users',
      description: 'Aktif kullanıcı sayısı'
    },
    {
      title: 'Toplam Soru',
      value: '856',
      trend: '+8%',
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'green',
      link: '/admin/questions',
      description: 'Toplam soru sayısı'
    },
    {
      title: 'Toplam Cevap',
      value: '2,467',
      trend: '+15%',
      icon: <MessagesSquare className="w-8 h-8" />,
      color: 'purple',
      link: '/admin/answers',
      description: 'Toplam cevap sayısı'
    },
    {
      title: 'Aktif Tartışma',
      value: '142',
      trend: '+5%',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'orange',
      link: '/admin/discussions',
      description: 'Devam eden tartışmalar'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const colors = getColorClasses(stat.color);
        return (
          <Link
            key={index}
            to={stat.link}
            className={`relative bg-white rounded-xl shadow-lg p-6 transition-all duration-300 
              hover:scale-105 hover:shadow-xl ${colors.hover} ${colors.shadow} 
              group overflow-hidden`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-current" />
              <div className="absolute -right-2 -bottom-2 w-16 h-16 rounded-full bg-current" />
            </div>

            {/* Content */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className={`${colors.bg} p-3 rounded-xl ${colors.text} 
                  transition-transform duration-300 group-hover:scale-110 
                  group-hover:rotate-12`}>
                  {stat.icon}
                </div>
                <span className={`text-sm font-medium ${colors.trend} 
                  px-2 py-1 rounded-full bg-white/50 backdrop-blur-sm`}>
                  {stat.trend}
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-gray-600 text-sm group-hover:text-gray-900 
                  transition-colors">
                  {stat.title}
                </h3>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-500 group-hover:text-gray-600">
                  {stat.description}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};