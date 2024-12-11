import React from 'react';
import { FormFieldProps } from '../types';

interface SelectFieldProps extends FormFieldProps {
  options: { value: string; label: string }[];
  placeholder: string;
}

export const TextField: React.FC<FormFieldProps & {
  type?: string;
  placeholder: string;
  icon: React.ReactNode;
}> = ({ value, onChange, error, type = 'text', placeholder, icon }) => (
  <div>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`pl-10 block w-full rounded-lg border ${
          error ? 'border-red-300' : 'border-gray-300'
        } px-4 py-2 focus:outline-none focus:ring-2 ${
          error ? 'focus:ring-red-500' : 'focus:ring-blue-500'
        }`}
        placeholder={placeholder}
      />
    </div>
    {error && (
      <p className="mt-1 text-sm text-red-600">{error}</p>
    )}
  </div>
);

export const SelectField: React.FC<SelectFieldProps> = ({
  value,
  onChange,
  error,
  options,
  placeholder
}) => (
  <div>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`block w-full rounded-lg border ${
        error ? 'border-red-300' : 'border-gray-300'
      } px-4 py-2 focus:outline-none focus:ring-2 ${
        error ? 'focus:ring-red-500' : 'focus:ring-blue-500'
      }`}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && (
      <p className="mt-1 text-sm text-red-600">{error}</p>
    )}
  </div>
);