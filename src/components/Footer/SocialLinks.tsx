import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com', label: 'Youtube' }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-100">Bizi Takip Edin</h3>
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};