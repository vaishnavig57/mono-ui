'use client';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const Search: React.FC<SearchProps> = ({ value, onChange, placeholder = 'Search...', className }) => {
  return (
    <div
      className={
        'relative flex items-center w-full max-w-md mx-auto ' + (className || '')
      }
    >
      <span className="absolute left-3 text-gray-400">
        <FaSearch />
      </span>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-base shadow-sm bg-white hover:border-blue-400"
      />
    </div>
  );
};

export default Search; 