import { ReactNode } from 'react';

export interface StatCard {
  title: string;
  value: string;
  trend: string;
  icon: ReactNode;
  color: string;
  link: string;
  description: string;
}

export interface ColorClasses {
  bg: string;
  text: string;
  trend: string;
  hover: string;
  shadow: string;
}