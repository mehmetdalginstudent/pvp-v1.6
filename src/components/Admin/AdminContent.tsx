import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Questions } from './pages/Questions';
import { Answers } from './pages/Answers';
import { Announcements } from './pages/Announcements';
import { BlogList } from './pages/BlogList';
import { BlogEditor } from './pages/BlogEditor';
import { Settings } from './pages/Settings';

export const AdminContent: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto p-8">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/answers" element={<Answers />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/new" element={<BlogEditor />} />
        <Route path="/blog/edit/:id" element={<BlogEditor />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};