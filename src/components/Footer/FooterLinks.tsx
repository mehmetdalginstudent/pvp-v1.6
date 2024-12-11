import React from 'react';
import { Link } from 'react-router-dom';

export const FooterLinks: React.FC = () => {
  const links = [
    { label: 'Hakkımızda', href: '/about' },
    { label: 'İletişim', href: '/contact' },
    { label: 'S.S.S', href: '/faq' },
    { label: 'KVKK', href: '/privacy' }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-100">Hızlı Bağlantılar</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};