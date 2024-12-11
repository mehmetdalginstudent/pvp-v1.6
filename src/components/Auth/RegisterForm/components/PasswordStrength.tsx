import React from 'react';
import { Check, X } from 'lucide-react';
import { PASSWORD_REQUIREMENTS } from '../constants';

interface PasswordStrengthProps {
  password: string;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  return (
    <div className="mt-2 space-y-2">
      <p className="text-sm font-medium text-gray-700">Şifre gereksinimleri:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {PASSWORD_REQUIREMENTS.map(({ id, label, regex }) => {
          const isMet = regex.test(password);
          return (
            <div
              key={id}
              className={`flex items-center gap-2 text-sm ${
                isMet ? 'text-green-600' : 'text-gray-500'
              }`}
            >
              {isMet ? (
                <Check className="w-4 h-4" />
              ) : (
                <X className="w-4 h-4" />
              )}
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};