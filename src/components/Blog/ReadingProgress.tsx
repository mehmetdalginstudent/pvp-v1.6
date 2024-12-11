import React from 'react';

interface ReadingProgressProps {
  progress: number;
}

export const ReadingProgress: React.FC<ReadingProgressProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};