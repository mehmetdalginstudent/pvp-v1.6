import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  ArrowLeft, 
  Clock, 
  Eye, 
  User, 
  Calendar, 
  BookOpen,
  Tag,
  ArrowRight
} from 'lucide-react';
import { MainLayout } from '../Layout/MainLayout';
import { SocialShare } from '../SocialShare';
import { ReadingProgress } from './ReadingProgress';
import { posts } from '../../data/posts';
import { formatTimestamp } from '../../utils/dateUtils';
import { calculateReadingTime } from '../../utils/readingUtils';
import { CaseCategory } from '../../types';

export const BlogPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewCount, setViewCount] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<CaseCategory | null>(null);
  
  const post = posts.find(p => p.id === Number(id));
  const relatedPosts = posts
    .filter(p => p.id !== Number(id) && p.category === post?.category)
    .slice(0, 3);
  
  useEffect(() => {
    if (post) {
      setViewCount(Math.floor(Math.random() * 1000) + 100);

      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [post]);

  if (!post) {
    return (
      <MainLayout currentCategory={selectedCategory} onNavigate={setSelectedCategory}>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600">Blog yazısı bulunamadı.</p>
        </div>
      </MainLayout>
    );
  }

  const readingTime = calculateReadingTime(post.content);
  const categoryColors: Record<string, string> = {
    bireysel: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    aile: 'bg-green-100 text-green-800 hover:bg-green-200',
    okul: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    kariyer: 'bg-orange-100 text-orange-800 hover:bg-orange-200'
  };

  const handleCategoryClick = (category: CaseCategory) => {
    setSelectedCategory(category);
    navigate('/');
  };

  return (
    <MainLayout currentCategory={selectedCategory} onNavigate={setSelectedCategory}>
      <Helmet>
        <title>{post.title} | PDR Portal</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Dr. Ayşe Yılmaz" />
        <meta property="article:section" content={post.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <ReadingProgress progress={scrollProgress} />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Geri Dön
          </button>
          <SocialShare
            url={window.location.href}
            title={post.title}
          />
        </nav>

        <header className="mb-12">
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
          </div>
          
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{readingTime} dk okuma</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                <Eye className="w-4 h-4 text-green-600" />
                <span>{viewCount} görüntülenme</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span>{formatTimestamp(post.date)}</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                <BookOpen className="w-4 h-4 text-orange-600" />
                <span>{Math.ceil(post.content.length / 1000)} sayfa</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="flex items-center justify-between py-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Dr. Ayşe Yılmaz</p>
                  <p className="text-sm text-gray-600">Uzman Psikolojik Danışman</p>
                </div>
              </div>
              <button
                onClick={() => handleCategoryClick(post.category)}
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer ${categoryColors[post.category]}`}
              >
                <Tag className="w-4 h-4" />
                {post.category}
              </button>
            </div>
          </div>
        </header>

        {/* Rest of the component remains the same */}
      </article>
    </MainLayout>
  );
};