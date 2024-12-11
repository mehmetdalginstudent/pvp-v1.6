import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuestionStore } from '../../store/questionStore';
import { AddAnswerForm } from '../AddAnswerForm';
import { SocialShare } from '../SocialShare';
import { formatTimestamp } from '../../utils/dateUtils';
import { ArrowLeft } from 'lucide-react';

export const QuestionDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { questions } = useQuestionStore();
  const question = questions.find(q => q.id === Number(id));

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Soru bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Geri Dön
      </button>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{question.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>{question.author.name}</span>
            <span>•</span>
            <span>{question.author.city}</span>
            <span>•</span>
            <time>{formatTimestamp(question.date)}</time>
          </div>

          <div className="prose max-w-none mb-6">
            {question.question}
          </div>

          <SocialShare
            url={window.location.href}
            title={question.title}
          />

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Cevaplar</h2>
            <div className="space-y-6">
              {question.answers.map(answer => (
                <div key={answer.id} className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-800 mb-4">{answer.content}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <span>{answer.author.name}</span>
                      <span>•</span>
                      <span>{answer.author.city}</span>
                      <span>•</span>
                      <time>{formatTimestamp(answer.date)}</time>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cevap Ekle</h3>
            <AddAnswerForm questionId={question.id} onSubmit={() => {}} />
          </div>
        </div>
      </article>
    </div>
  );
};