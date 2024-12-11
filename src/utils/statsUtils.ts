import { Question, Answer } from '../types';

export const getCategoryStats = (questions: Question[]) => {
  const questionCount = questions.length;
  const answerCount = questions.reduce((total, question) => total + question.answers.length, 0);
  
  return {
    questionCount,
    answerCount
  };
};

export const getPopularQuestions = (questions: Question[], limit: number = 3) => {
  return [...questions]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
};

export const getPopularAnswers = (questions: Question[], limit: number = 3): { question: Question; answer: Answer }[] => {
  const allAnswers = questions.flatMap(question => 
    question.answers.map(answer => ({
      question,
      answer,
      score: answer.likes - answer.dislikes
    }))
  );

  return allAnswers
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};