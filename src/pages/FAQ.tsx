import React, { useState } from 'react';
import { MainLayout } from '../components/Layout/MainLayout';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const categories = [
    { id: 'general', label: 'Genel' },
    { id: 'account', label: 'Hesap' },
    { id: 'cases', label: 'Vakalar' },
    { id: 'supervision', label: 'Süpervizyon' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'PDR Portal nedir?',
      answer: 'PDR Portal, psikolojik danışmanların profesyonel gelişimini destekleyen bir öğrenme ve paylaşım platformudur.'
    },
    {
      id: 2,
      category: 'account',
      question: 'Nasıl üye olabilirim?',
      answer: 'Üye olmak için ana sayfadaki "Üye Ol" butonuna tıklayarak kayıt formunu doldurabilirsiniz.'
    },
    {
      id: 3,
      category: 'cases',
      question: 'Vaka paylaşımı nasıl yapılır?',
      answer: 'Vaka paylaşımı yapmak için üye girişi yaptıktan sonra ilgili kategoride "Vaka Ekle" butonunu kullanabilirsiniz.'
    }
  ];

  const toggleItem = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.category === activeCategory &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <MainLayout currentCategory={null} onNavigate={() => {}}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h1>
          <p className="text-xl text-gray-600">
            PDR Portal hakkında merak ettiğiniz her şey
          </p>
        </div>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Soru ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 pl-12 pr-4 py-3 focus:border-blue-500 focus:outline-none"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {expandedItems.includes(faq.id) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedItems.includes(faq.id) && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};