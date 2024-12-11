import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  User, 
  Users, 
  School, 
  Briefcase, 
  Menu, 
  X,
  Settings,
  Rss
} from 'lucide-react';
import { CaseCategory } from '../types';
import { useAuthStore } from '../store/authStore';

interface NavbarProps {
  onNavigate: (category: CaseCategory | null) => void;
  currentCategory: CaseCategory | null;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Anasayfa', value: null },
    { icon: <User className="w-5 h-5" />, label: 'Bireysel Danışmanlık', value: 'bireysel' as CaseCategory },
    { icon: <Users className="w-5 h-5" />, label: 'Aile Danışmanlığı', value: 'aile' as CaseCategory },
    { icon: <School className="w-5 h-5" />, label: 'Okul Psikolojik Danışmanlığı', value: 'okul' as CaseCategory },
    { icon: <Briefcase className="w-5 h-5" />, label: 'Kariyer Danışmanlığı', value: 'kariyer' as CaseCategory },
  ];

  const handleNavigation = (category: CaseCategory | null) => {
    onNavigate(category);
    setIsMenuOpen(false);
  };

  const handleAdminClick = () => {
    navigate('/admin');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end py-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.value)}
                className={`flex items-center px-4 py-4 text-sm font-medium transition-all duration-300
                  ${currentCategory === item.value 
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              to="/rss"
              className="flex items-center px-4 py-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              <Rss className="w-5 h-5 mr-2" />
              <span>RSS</span>
            </Link>
            {user ? (
              <>
                <button
                  onClick={handleAdminClick}
                  className="flex items-center px-4 py-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  <Settings className="w-5 h-5 mr-2" />
                  <span>Yönetim</span>
                </button>
                <button
                  onClick={() => logout()}
                  className="flex items-center px-4 py-4 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <span>Çıkış Yap</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center px-4 py-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  <span>Giriş Yap</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center px-4 py-2 mx-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  <span>Üye Ol</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-2 pb-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.value)}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300
                  ${currentCategory === item.value 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <Link
              to="/rss"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              <Rss className="w-5 h-5 mr-2" />
              <span>RSS</span>
            </Link>
            {user ? (
              <>
                <button
                  onClick={handleAdminClick}
                  className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  <Settings className="w-5 h-5 mr-2" />
                  <span>Yönetim</span>
                </button>
                <button
                  onClick={() => logout()}
                  className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <span>Çıkış Yap</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  <span>Giriş Yap</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
                >
                  <span>Üye Ol</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};