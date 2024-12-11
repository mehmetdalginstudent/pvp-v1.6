import React, { useState } from 'react';
import { Post, Question, CaseCategory, Answer, SchoolLevel, UserInfo } from '../types';
import { AddQuestionForm } from './AddQuestionForm';
import { QuestionList } from './QuestionList';
import { getCurrentTimestamp } from '../utils/dateUtils';
import { PostList } from './PostList';
import { SchoolLevelCard } from './SchoolLevelCard';
import { schoolLevels } from '../data/schoolLevels';
import { filterProfanity } from '../utils/profanityFilter';

interface CategoryContentProps {
  level: CaseCategory;
  posts: Post[];
  questions: Question[];
}

export const CategoryContent: React.FC<CategoryContentProps> = ({ level, posts, questions: initialQuestions }) => {
  const [selectedSchoolLevel, setSelectedSchoolLevel] = useState<SchoolLevel | null>(null);
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);

  const handleAddQuestion = (title: string, questionText: string, userInfo: UserInfo) => {
    const filteredTitle = filterProfanity(title);
    const filteredQuestion = filterProfanity(questionText);
    const newQuestion: Question = {
      id: Date.now(),
      title: filteredTitle,
      question: filteredQuestion,
      answers: [],
      category: level,
      schoolLevel: selectedSchoolLevel || undefined,
      date: getCurrentTimestamp(),
      author: userInfo,
      popularity: 0
    };
    setQuestions([newQuestion, ...questions]);
  };

  const handleAddAnswer = (answerText: string, questionId: number, userInfo: UserInfo) => {
    const filteredAnswer = filterProfanity(answerText);
    const newAnswer: Answer = {
      id: Date.now(),
      content: filteredAnswer,
      date: getCurrentTimestamp(),
      questionId: questionId,
      author: userInfo,
      likes: 0,
      dislikes: 0
    };

    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          answers: [...q.answers, newAnswer],
          popularity: q.popularity + 1
        };
      }
      return q;
    }));
  };

  const handleLikeAnswer = (questionId: number, answerId: number) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          answers: q.answers.map(a => {
            if (a.id === answerId) {
              return { ...a, likes: a.likes + 1 };
            }
            return a;
          })
        };
      }
      return q;
    }));
  };

  const handleDislikeAnswer = (questionId: number, answerId: number) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          answers: q.answers.map(a => {
            if (a.id === answerId) {
              return { ...a, dislikes: a.dislikes + 1 };
            }
            return a;
          })
        };
      }
      return q;
    }));
  };

  const categoryTitles = {
    bireysel: 'Bireysel Danışmanlık',
    aile: 'Aile Danışmanlığı',
    okul: 'Okul Psikolojik Danışmanlığı',
    kariyer: 'Kariyer Danışmanlığı'
  };

  const filterBySchoolLevel = (items: Array<Post | Question>) => {
    if (!selectedSchoolLevel) return items;
    return items.filter(item => item.schoolLevel === selectedSchoolLevel);
  };

  if (level === 'okul' && !selectedSchoolLevel) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {categoryTitles[level]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(Object.keys(schoolLevels) as SchoolLevel[]).map((schoolLevel) => (
            <SchoolLevelCard
              key={schoolLevel}
              level={schoolLevel}
              questions={questions.filter(q => q.schoolLevel === schoolLevel)}
              recentPosts={posts.filter(p => p.schoolLevel === schoolLevel)}
              onClick={setSelectedSchoolLevel}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {selectedSchoolLevel ? schoolLevels[selectedSchoolLevel].title : categoryTitles[level]}
      </h2>
      
      <div className="grid gap-8">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Vakalar ve Görüşler</h3>
          </div>
          <AddQuestionForm category={level} onSubmit={handleAddQuestion} />
          <QuestionList 
            questions={filterBySchoolLevel(questions)} 
            onAddAnswer={handleAddAnswer}
            onLikeAnswer={handleLikeAnswer}
            onDislikeAnswer={handleDislikeAnswer}
          />
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Vaka Çalışmaları</h3>
          <PostList posts={filterBySchoolLevel(posts)} />
        </section>
      </div>
    </div>
  );
};