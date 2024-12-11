import React from 'react';
import { Users, MessageSquare, MessagesSquare, TrendingUp } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Toplam Kullanıcı"
          value="1,234"
          icon={<Users className="w-8 h-8" />}
          trend="+12%"
        />
        <DashboardCard
          title="Toplam Soru"
          value="856"
          icon={<MessageSquare className="w-8 h-8" />}
          trend="+8%"
        />
        <DashboardCard
          title="Toplam Cevap"
          value="2,467"
          icon={<MessagesSquare className="w-8 h-8" />}
          trend="+15%"
        />
        <DashboardCard
          title="Aktif Tartışma"
          value="142"
          icon={<TrendingUp className="w-8 h-8" />}
          trend="+5%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentQuestions />
        <PopularAnswers />
      </div>
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, trend }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="text-blue-600">{icon}</div>
      <span className="text-green-500 text-sm font-medium">{trend}</span>
    </div>
    <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

const RecentQuestions = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Son Sorular</h3>
    <div className="space-y-4">
      {/* Add recent questions list here */}
    </div>
  </div>
);

const PopularAnswers = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Popüler Cevaplar</h3>
    <div className="space-y-4">
      {/* Add popular answers list here */}
    </div>
  </div>
);