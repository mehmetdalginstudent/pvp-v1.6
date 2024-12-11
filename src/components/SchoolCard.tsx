import React from 'react';
import { Post, CaseCategory, Question } from '../types';
import { Users, MessageSquare, MessagesSquare, TrendingUp, ThumbsUp } from 'lucide-react';
import { getCategoryStats, getPopularQuestions, getPopularAnswers } from '../utils/statsUtils';

interface CaseCategoryCardProps {
  category: CaseCategory;
  recentPosts: Post[];
  onClick: (category: CaseCategory) => void;
  questions: Question[];
}

const categoryIcons = {
  bireysel: '👤',
  aile: '👨‍👩‍👧‍👦',
  okul: '🏫',
  kariyer: '💼'
};

const categoryTitles = {
  bireysel: 'Bireysel Danışmanlık',
  aile: 'Aile Danışmanlığı',
  okul: 'Okul Psikolojik Danışmanlığı',
  kariyer: 'Kariyer Danışmanlığı'
};

export const CaseCategoryCard: React.FC<CaseCategoryCardProps> = ({ 
  category, 
  recentPosts, 
  onClick, 
  questions 
}) => {
  const { questionCount, answerCount } = getCategoryStats(questions);
  const popularQuestions = getPopularQuestions(questions);
  const popularAnswers = getPopularAnswers(questions);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div 
        className="p-6 border-b border-gray-100 cursor-pointer group"
        onClick={() => onClick(category)}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
            {categoryIcons[category]}
          </span>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            {categoryTitles[category]}
          </h2>
        </div>

        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            <span className="font-medium">{questionCount} Vaka</span>
          </div>
          <div className="flex items-center gap-2">
            <MessagesSquare className="w-5 h-5 text-green-500" />
            <span className="font-medium">{answerCount} Görüş</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            Popüler Vakalar
          </h3>
          <ul className="space-y-3">
            {popularQuestions.map((question) => (
              <li 
                key={question.id} 
                className="group cursor-pointer"
                onClick={() => onClick(category)}
              >
                <div className="flex items-center justify-between rounded-lg p-2 hover:bg-gray-50">
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-1 flex-1">
                    {question.title}
                  </span>
                  <span className="text-blue-600 flex items-center gap-1 ml-2">
                    <MessagesSquare className="w-4 h-4" />
                    {question.answers.length}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4">
            <ThumbsUp className="w-5 h-5 text-green-500" />
            Öne Çıkan Görüşler
          </h3>
          <ul className="space-y-3">
            {popularAnswers.map(({ question, answer }) => (
              <li 
                key={answer.id} 
                className="group cursor-pointer"
                onClick={() => onClick(category)}
              >
                <div className="rounded-lg p-2 hover:bg-gray-50">
                  <div className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {question.title}
                  </div>
                  <div className="text-gray-600 text-sm line-clamp-2 mt-1">
                    {answer.content}
                  </div>
                  <div className="flex items-center gap-3 text-xs mt-2">
                    <span className="text-green-600 font-medium">+{answer.likes}</span>
                    <span className="text-red-600 font-medium">-{answer.dislikes}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4">
            <Users className="w-5 h-5 text-purple-500" />
            Son Blog Yazıları
          </h3>
          <ul className="space-y-2">
            {recentPosts.slice(0, 3).map((post) => (
              <li 
                key={post.id} 
                className="text-gray-700 hover:text-blue-600 transition-colors line-clamp-1 cursor-pointer p-2 hover:bg-gray-50 rounded-lg"
                onClick={() => onClick(category)}
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};