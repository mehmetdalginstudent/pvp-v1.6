import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  MessagesSquare, 
  Bell, 
  FileText,
  Settings 
} from 'lucide-react';

export const AdminSidebar: React.FC = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin' },
    { icon: <MessageSquare size={20} />, label: 'Sorular', path: '/admin/questions' },
    { icon: <MessagesSquare size={20} />, label: 'Cevaplar', path: '/admin/answers' },
    { icon: <Bell size={20} />, label: 'Duyurular', path: '/admin/announcements' },
    { icon: <FileText size={20} />, label: 'Blog', path: '/admin/blog' },
    { icon: <Settings size={20} />, label: 'Ayarlar', path: '/admin/settings' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Yönetim Paneli</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};