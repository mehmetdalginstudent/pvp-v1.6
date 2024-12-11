import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bell, User, Search } from 'lucide-react';

export const AdminHeader: React.FC = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname.split('/').pop() || '';
    switch (path) {
      case 'admin':
        return 'Dashboard';
      case 'questions':
        return 'Sorular';
      case 'answers':
        return 'Cevaplar';
      case 'announcements':
        return 'Duyurular';
      case 'blog':
        return 'Blog';
      case 'settings':
        return 'Ayarlar';
      default:
        return 'Yönetim Paneli';
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            ← Siteye Dön
          </Link>
          <div className="h-6 w-px bg-gray-200" />
          <h1 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Ara..."
              className="w-64 rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          <button className="relative text-gray-600 hover:text-blue-600">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium text-gray-800">Admin User</p>
              <p className="text-gray-500">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-6 py-2">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>Son güncelleme: {new Date().toLocaleString()}</span>
          <span>•</span>
          <span>Aktif kullanıcı: 42</span>
          <span>•</span>
          <span>Sistem durumu: Normal</span>
        </div>
      </div>
    </header>
  );
};