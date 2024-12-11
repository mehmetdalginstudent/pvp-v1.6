import React, { useState } from 'react';
import { SchoolLevel, UserInfo } from '../types';
import { Send, User, MapPin, Plus } from 'lucide-react';
import { EthicalAgreement } from './EthicalAgreement';
import { hasProfanity } from '../utils/profanityFilter';

interface AddQuestionFormProps {
  category: SchoolLevel;
  onSubmit: (title: string, question: string, userInfo: UserInfo) => void;
}

export const AddQuestionForm: React.FC<AddQuestionFormProps> = ({ category, onSubmit }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showEthicalAgreement, setShowEthicalAgreement] = useState(false);
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    city: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    city: '',
    title: ''
  });

  const validateInput = (field: 'name' | 'city' | 'title', value: string) => {
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

  const handleTitleChange = (value: string) => {
    if (validateInput('title', value)) {
      setTitle(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation before submission
    const isNameValid = validateInput('name', userInfo.name);
    const isCityValid = validateInput('city', userInfo.city);
    const isTitleValid = validateInput('title', title);

    if (title.trim() && question.trim() && isNameValid && isCityValid && isTitleValid) {
      onSubmit(title, question, userInfo);
      setTitle('');
      setQuestion('');
      setUserInfo({ name: '', city: '' });
      setIsFormVisible(false);
    }
  };

  const handleAddQuestionClick = () => {
    setShowEthicalAgreement(true);
  };

  const handleEthicalAgreementAccept = () => {
    setShowEthicalAgreement(false);
    setIsFormVisible(true);
  };

  return (
    <div className="mb-6">
      {!isFormVisible && (
        <button
          onClick={handleAddQuestionClick}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Soru/Vaka Ekle
        </button>
      )}

      <EthicalAgreement
        isOpen={showEthicalAgreement}
        onAccept={handleEthicalAgreementAccept}
        onClose={() => setShowEthicalAgreement(false)}
      />

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mt-4">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  <User className="w-4 h-4 inline-block mr-1" />
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
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
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  <MapPin className="w-4 h-4 inline-block mr-1" />
                  Şehir
                </label>
                <input
                  type="text"
                  id="city"
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
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Vaka/Soru Başlığı
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className={`w-full rounded-lg border ${errors.title ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:border-blue-500 focus:outline-none`}
                placeholder="Vaka/Soru başlığını girin..."
                required
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                Vaka/Soru Detayı
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Vakanızı veya sorunuzu detaylı bir şekilde açıklayın..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none min-h-[100px]"
                required
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setIsFormVisible(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                İptal
              </button>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
                disabled={!!errors.name || !!errors.city || !!errors.title}
              >
                <Send className="w-4 h-4" />
                Gönder
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};