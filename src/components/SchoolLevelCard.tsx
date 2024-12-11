import React from 'react';
import { SchoolLevel, Question, Post } from '../types';
import { Users, MessageSquare, MessagesSquare } from 'lucide-react';
import { schoolLevels } from '../data/schoolLevels';
import { getCategoryStats } from '../utils/statsUtils';

interface SchoolLevelCardProps {
  level: SchoolLevel;
  questions: Question[];
  recentPosts: Post[];
  onClick: (level: SchoolLevel) => void;
}

export const SchoolLevelCard: React.FC<SchoolLevelCardProps> = ({
  level,
  questions,
  recentPosts,
  onClick
}) => {
  const { questionCount, answerCount } = getCategoryStats(questions);
  const levelInfo = schoolLevels[level];

  return (
    <div
      onClick={() => onClick(level)}
      className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-2">{levelInfo.icon}</span>
        <h2 className="text-xl font-bold text-gray-800">{levelInfo.title}</h2>
      </div>

      <p className="text-gray-600 text-sm mb-4">{levelInfo.description}</p>

      <div className="flex items-center gap-4 mb-4 text-gray-600">
        <div className="flex items-center gap-1">
          <MessageSquare className="w-4 h-4" />
          <span>{questionCount} Vaka</span>
        </div>
        <div className="flex items-center gap-1">
          <MessagesSquare className="w-4 h-4" />
          <span>{answerCount} Görüş</span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <Users className="w-5 h-5" />
          Son Vakalar
        </h3>
        <ul className="space-y-2">
          {recentPosts.slice(0, 5).map((post) => (
            <li key={post.id} className="text-gray-600 hover:text-blue-600">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};