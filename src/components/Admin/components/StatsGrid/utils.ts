import { ColorClasses } from './types';

export const getColorClasses = (color: string): ColorClasses => {
  const colors: Record<string, ColorClasses> = {
    blue: { 
      bg: 'bg-blue-50', 
      text: 'text-blue-600', 
      trend: 'text-blue-500',
      hover: 'hover:bg-blue-100',
      shadow: 'hover:shadow-blue-100'
    },
    green: { 
      bg: 'bg-green-50', 
      text: 'text-green-600', 
      trend: 'text-green-500',
      hover: 'hover:bg-green-100',
      shadow: 'hover:shadow-green-100'
    },
    purple: { 
      bg: 'bg-purple-50', 
      text: 'text-purple-600', 
      trend: 'text-purple-500',
      hover: 'hover:bg-purple-100',
      shadow: 'hover:shadow-purple-100'
    },
    orange: { 
      bg: 'bg-orange-50', 
      text: 'text-orange-600', 
      trend: 'text-orange-500',
      hover: 'hover:bg-orange-100',
      shadow: 'hover:shadow-orange-100'
    }
  };
  return colors[color];
};