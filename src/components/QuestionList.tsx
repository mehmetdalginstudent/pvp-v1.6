import React, { useState, useEffect } from 'react';
import { Question, UserInfo } from '../types';
import { AddAnswerForm } from './AddAnswerForm';
import { SocialShare } from './SocialShare';
import { 
  MessageCircle, 
  Calendar, 
  User, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  ThumbsUp,
  ThumbsDown,
  TrendingUp,
  Link as LinkIcon
} from 'lucide-react';
import { formatTimestamp } from '../utils/dateUtils';

interface QuestionListProps {
  questions: Question[];
  onAddAnswer: (answer: string, questionId: number, userInfo: UserInfo) => void;
  onLikeAnswer: (questionId: number, answerId: number) => void;
  onDislikeAnswer: (questionId: number, answerId: number) => void;
}

export const QuestionList: React.FC<QuestionListProps> = ({ 
  questions, 
  onAddAnswer,
  onLikeAnswer,
  onDislikeAnswer
}) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);

  // Check URL hash on mount and when it changes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const questionId = parseInt(hash.replace('#question-', ''));
      if (!isNaN(questionId)) {
        setExpandedQuestionId(questionId);
        // Scroll to the question
        setTimeout(() => {
          const element = document.getElementById(`question-${questionId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, []);

  // Sort questions by date (newest first)
  const sortedQuestions = [...questions].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const toggleQuestion = (questionId: number) => {
    setExpandedQuestionId(expandedQuestionId === questionId ? null : questionId);
    // Update URL hash
    if (expandedQuestionId === questionId) {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.history.pushState(null, '', `#question-${questionId}`);
    }
  };

  const getPopularityColor = (popularity: number = 0) => {
    if (popularity >= 10) return 'text-red-500';
    if (popularity >= 5) return 'text-orange-500';
    return 'text-blue-500';
  };

  const copyQuestionLink = (questionId: number) => {
    const url = `${window.location.origin}${window.location.pathname}#question-${questionId}`;
    navigator.clipboard.writeText(url);
  };

  // Generate a summary from the question text
  const generateSummary = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <div className="space-y-3">
      {sortedQuestions.map((question) => {
        const isExpanded = expandedQuestionId === question.id;
        
        // Sort answers by date (oldest first)
        const sortedAnswers = [...question.answers].sort((a, b) => 
          new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        const questionUrl = `${window.location.origin}${window.location.pathname}#question-${question.id}`;

        return (
          <div 
            key={question.id} 
            id={`question-${question.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => toggleQuestion(question.id)}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <span className="text-gray-500">
                    {formatTimestamp(question.date)}
                  </span>
                  <h4 className="text-lg font-semibold text-gray-800">{question.title}</h4>
                </div>
                <div className="flex items-center gap-4">
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      copyQuestionLink(question.id);
                    }}
                    className="p-1 hover:bg-gray-100 rounded-full cursor-pointer"
                    title="Sorunun linkini kopyala"
                  >
                    <LinkIcon className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className={`flex items-center gap-1 ${getPopularityColor(question.popularity)}`}>
                    <TrendingUp className="w-4 h-4" />
                    <span>{question.popularity || 0}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </div>
              {!isExpanded && (
                <p className="text-gray-600 text-sm">
                  {generateSummary(question.question)}
                </p>
              )}
            </div>

            {isExpanded && (
              <div className="px-6 pb-6">
                <div className="pt-4 border-t">
                  <p className="text-gray-700 mb-3">{question.question}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {question.author.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {question.author.city}
                    </span>
                  </div>

                  <SocialShare url={questionUrl} title={question.title} />

                  <div className="space-y-4 mt-6">
                    {sortedAnswers.map((answer) => (
                      <div key={answer.id} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 mb-2">{answer.content}</p>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {answer.author.name}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {answer.author.city}
                            </span>
                            <time>{formatTimestamp(answer.date)}</time>
                          </div>
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => onLikeAnswer(question.id, answer.id)}
                              className="flex items-center gap-1 text-green-600 hover:text-green-700"
                            >
                              <ThumbsUp className="w-4 h-4" />
                              <span>{answer.likes || 0}</span>
                            </button>
                            <button
                              onClick={() => onDislikeAnswer(question.id, answer.id)}
                              className="flex items-center gap-1 text-red-600 hover:text-red-700"
                            >
                              <ThumbsDown className="w-4 h-4" />
                              <span>{answer.dislikes || 0}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center text-gray-600 mb-2">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">Yanıt ekle</span>
                    </div>
                    <AddAnswerForm questionId={question.id} onSubmit={onAddAnswer} />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};