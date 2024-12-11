import React from 'react';
import { StatsGrid } from '../../components/StatsGrid';
import { ActivityChart } from './ActivityChart';
import { RecentQuestions } from './RecentQuestions';
import { PopularPosts } from './PopularPosts';
import { EngagementMetrics } from './EngagementMetrics';
import { CategoryDistribution } from './CategoryDistribution';
import { TrendingTopics } from './TrendingTopics';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart />
        <CategoryDistribution />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentQuestions />
        </div>
        <div>
          <TrendingTopics />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PopularPosts />
        <EngagementMetrics />
      </div>
    </div>
  );
};