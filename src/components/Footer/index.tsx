import React from 'react';
import { Link } from 'react-router-dom';
import { School } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { FooterLinks } from './FooterLinks';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Copyright */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <School className="w-8 h-8" />
              <span className="text-xl font-bold">PDR Portal</span>
            </Link>
            <p className="text-sm">
              Profesyonel gelişiminiz için vaka paylaşımı ve süpervizyon platformu
            </p>
          </div>

          {/* Quick Links */}
          <FooterLinks />

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {currentYear} Mehmet Dalğın. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/terms" className="hover:text-white transition-colors">
                Kullanım Şartları
              </Link>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};