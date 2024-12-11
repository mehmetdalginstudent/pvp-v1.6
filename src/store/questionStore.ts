import { create } from 'zustand';
import { Question } from '../types';
import { questions as initialQuestions } from '../data/questions';

interface QuestionStore {
  questions: Question[];
  addQuestion: (question: Omit<Question, 'id' | 'date' | 'answers' | 'popularity'>) => void;
  updateQuestion: (id: number, question: Partial<Question>) => void;
  deleteQuestion: (id: number) => void;
  toggleQuestionStatus: (id: number, status: 'published' | 'hidden') => void;
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: initialQuestions.map(q => ({ ...q, status: 'published' })),

  addQuestion: (question) => set((state) => ({
    questions: [
      {
        ...question,
        id: Date.now(),
        date: new Date().toISOString(),
        answers: [],
        popularity: 0,
        status: 'published'
      },
      ...state.questions
    ]
  })),

  updateQuestion: (id, questionData) => set((state) => ({
    questions: state.questions.map(q =>
      q.id === id ? { ...q, ...questionData } : q
    )
  })),

  deleteQuestion: (id) => set((state) => ({
    questions: state.questions.filter(q => q.id !== id)
  })),

  toggleQuestionStatus: (id, status) => set((state) => ({
    questions: state.questions.map(q =>
      q.id === id ? { ...q, status } : q
    )
  }))
}));