import React, { useState } from 'react';
import { CaseCategoryCard } from './SchoolCard';
import { CategoryContent } from './CategoryContent';
import { BlogSection } from './BlogSection';
import { MainLayout } from './Layout/MainLayout';
import { posts } from '../data/posts';
import { questions } from '../data/questions';
import type { CaseCategory } from '../types';

export const MainContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CaseCategory | null>(null);

  const getPostsByCategory = (category: CaseCategory) => {
    return posts.filter(post => post.category === category);
  };

  const getQuestionsByCategory = (category: CaseCategory) => {
    return questions.filter(question => question.category === category);
  };

  const handleCardClick = (category: CaseCategory) => {
    setSelectedCategory(category);
  };

  return (
    <MainLayout currentCategory={selectedCategory} onNavigate={setSelectedCategory}>
      {selectedCategory ? (
        <CategoryContent
          level={selectedCategory}
          posts={getPostsByCategory(selectedCategory)}
          questions={getQuestionsByCategory(selectedCategory)}
        />
      ) : (
        <div className="p-8">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Psikolojik Danışman Portalı
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesyonel gelişiminiz için vaka paylaşımı ve süpervizyon platformu
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(['bireysel', 'aile', 'okul', 'kariyer'] as CaseCategory[]).map((category) => (
              <CaseCategoryCard
                key={category}
                category={category}
                recentPosts={getPostsByCategory(category)}
                questions={getQuestionsByCategory(category)}
                onClick={handleCardClick}
              />
            ))}
          </div>
          <BlogSection posts={posts} />
        </div>
      )}
    </MainLayout>
  );
};