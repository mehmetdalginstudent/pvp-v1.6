import React from 'react';
import { Navbar } from '../Navbar';
import { NewsTicker } from '../NewsTicker';
import { Footer } from '../Footer';
import { CaseCategory } from '../../types';

interface MainLayoutProps {
  children: React.ReactNode;
  currentCategory: CaseCategory | null;
  onNavigate: (category: CaseCategory | null) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  currentCategory,
  onNavigate
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar onNavigate={onNavigate} currentCategory={currentCategory} />
      <NewsTicker />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};