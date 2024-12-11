import React, { useState } from 'react';
import { Send, User, MapPin } from 'lucide-react';
import { UserInfo } from '../types';
import { hasProfanity } from '../utils/profanityFilter';

interface AddAnswerFormProps {
  questionId: number;
  onSubmit: (answer: string, questionId: number, userInfo: UserInfo) => void;
}

export const AddAnswerForm: React.FC<AddAnswerFormProps> = ({ questionId, onSubmit }) => {
  const [answer, setAnswer] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    city: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    city: ''
  });

  const validateInput = (field: 'name' | 'city', value: string) => {
    if (hasProfanity(value)) {
      setErrors(prev => ({
        ...prev,
        [field]: 'Uygunsuz içerik tespit edildi. Lütfen düzeltin.'
      }));
      return false;
    }
    setErrors(prev => ({
      ...prev,
      [field]: ''
    }));
    return true;
  };

  const handleUserInfoChange = (field: 'name' | 'city', value: string) => {
    if (validateInput(field, value)) {
      setUserInfo(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation before submission
    const isNameValid = validateInput('name', userInfo.name);
    const isCityValid = validateInput('city', userInfo.city);

    if (answer.trim() && isNameValid && isCityValid) {
      onSubmit(answer, questionId, userInfo);
      setAnswer('');
      setUserInfo({ name: '', city: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="responderName" className="block text-sm font-medium text-gray-700 mb-1">
            <User className="w-4 h-4 inline-block mr-1" />
            Adınız
          </label>
          <input
            type="text"
            id="responderName"
            value={userInfo.name}
            onChange={(e) => handleUserInfoChange('name', e.target.value)}
            className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:border-blue-500 focus:outline-none`}
            placeholder="Adınızı girin"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="responderCity" className="block text-sm font-medium text-gray-700 mb-1">
            <MapPin className="w-4 h-4 inline-block mr-1" />
            Şehir
          </label>
          <input
            type="text"
            id="responderCity"
            value={userInfo.city}
            onChange={(e) => handleUserInfoChange('city', e.target.value)}
            className={`w-full rounded-lg border ${errors.city ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:border-blue-500 focus:outline-none`}
            placeholder="Şehrinizi girin"
            required
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>
      </div>

      <div>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Cevabınızı yazın..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none min-h-[100px]"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition-colors"
        disabled={!!errors.name || !!errors.city}
      >
        <Send className="w-4 h-4" />
        Yanıtla
      </button>
    </form>
  );
};