import { create } from 'zustand';
import { Answer, Question } from '../types';
import { questions as initialQuestions } from '../data/questions';

interface AnswerStore {
  questions: Question[];
  addAnswer: (questionId: number, answer: Omit<Answer, 'id' | 'date'>) => void;
  updateAnswer: (questionId: number, answerId: number, content: string) => void;
  deleteAnswer: (questionId: number, answerId: number) => void;
  toggleAnswerStatus: (questionId: number, answerId: number) => void;
  likeAnswer: (questionId: number, answerId: number) => void;
  dislikeAnswer: (questionId: number, answerId: number) => void;
}

export const useAnswerStore = create<AnswerStore>((set) => ({
  questions: initialQuestions.map(q => ({
    ...q,
    answers: q.answers.map(a => ({ ...a, status: 'published' }))
  })),

  addAnswer: (questionId, answer) => set((state) => ({
    questions: state.questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          answers: [...q.answers, {
            ...answer,
            id: Date.now(),
            date: new Date().toISOString(),
            questionId,
            likes: 0,
            dislikes: 0,
            status: 'published'
          }],
          popularity: q.popularity + 1
        };
      }
      return q;
    })
  })),

  updateAnswer: (questionId, answerId, content) => set((state) => ({
    questions: state.questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          answers: q.answers.map(a => 
            a.id === answerId ? { ...a, content } : a
          )
        };
      }
      return q;
    })
  })),

  deleteAnswer: (questionId, answerId) => set((state) => ({
    questions: state.questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          answers: q.answers.filter(a => a.id !== answerId),
          popularity: Math.max(0, q.popularity - 1)
        };
      }
      return q;
    })
  })),

  toggleAnswerStatus: (questionId, answerId) => set((state) => ({
    questions: state.questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          answers: q.answers.map(a => 
            a.id === answerId 
              ? { ...a, status: a.status === 'published' ? 'hidden' : 'published' }
              : a
          )
        };
      }
      return q;
    })
  })),

  likeAnswer: (questionId, answerId) => set((state) => ({
    questions: state.questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          answers: q.answers.map(a => 
            a.id === answerId ? { ...a, likes: a.likes + 1 } : a
          )
        };
      }
      return q;
    })
  })),

  dislikeAnswer: (questionId, answerId) => set((state) => ({
    questions: state.questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          answers: q.answers.map(a => 
            a.id === answerId ? { ...a, dislikes: a.dislikes + 1 } : a
          )
        };
      }
      return q;
    })
  })),
}));