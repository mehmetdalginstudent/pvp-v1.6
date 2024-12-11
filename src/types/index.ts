export interface Post {
  id: number;
  title: string;
  content: string;
  category: CaseCategory;
  schoolLevel?: SchoolLevel;
  date: string;
  image: string;
  excerpt: string;
  archived?: boolean;
}

export type CaseCategory = 'bireysel' | 'aile' | 'okul' | 'kariyer';
export type SchoolLevel = 'anaokul' | 'ilkokul' | 'ortaokul' | 'lise';

export interface UserInfo {
  name: string;
  city: string;
}

export interface Answer {
  id: number;
  content: string;
  date: string;
  questionId: number;
  author: UserInfo;
  likes: number;
  dislikes: number;
  status?: 'published' | 'hidden';
}

export interface Question {
  id: number;
  title: string;
  question: string;
  answers: Answer[];
  category: CaseCategory;
  schoolLevel?: SchoolLevel;
  date: string;
  author: UserInfo;
  popularity: number;
  status?: 'published' | 'hidden';
}

export interface SchoolLevelInfo {
  title: string;
  icon: string;
  description: string;
}