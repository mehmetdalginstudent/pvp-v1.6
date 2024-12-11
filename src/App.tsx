import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { MainContent } from './components/MainContent';
import { AdminPanel } from './components/Admin/AdminPanel';
import { BlogPost } from './components/Blog/BlogPost';
import { QuestionDetail } from './components/Question/QuestionDetail';
import { AnnouncementDetail } from './components/Announcement/AnnouncementDetail';
import { RSSFeed } from './components/RSSFeed';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { PrivateRoute } from './components/Auth/PrivateRoute';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/*" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/question/:id" element={<QuestionDetail />} />
      <Route path="/announcement/:id" element={<AnnouncementDetail />} />
      <Route path="/rss" element={<RSSFeed />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default App;