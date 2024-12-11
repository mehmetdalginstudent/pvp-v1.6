import React from 'react';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, onCategoryChange }) => (
  <div className="flex gap-4">
    <input
      type="text"
      placeholder="Ara..."
      onChange={(e) => onSearch(e.target.value)}
      className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
    />
    <select 
      onChange={(e) => onCategoryChange(e.target.value)}
      className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
    >
      <option value="">Tüm Kategoriler</option>
      <option value="bireysel">Bireysel</option>
      <option value="aile">Aile</option>
      <option value="okul">Okul</option>
      <option value="kariyer">Kariyer</option>
    </select>
  </div>
);