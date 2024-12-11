import React, { useState } from 'react';
import { Trash2, Edit2, Eye, Power } from 'lucide-react';
import { useQuestionStore } from '../../../store/questionStore';
import { formatTimestamp } from '../../../utils/dateUtils';
import { SearchFilters } from '../components/SearchFilters';
import { QuestionTableHeader } from '../components/QuestionTableHeader';
import { Question } from '../../../types';

export const Questions: React.FC = () => {
  const { questions, updateQuestion, deleteQuestion, toggleQuestionStatus } = useQuestionStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || question.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (question: Question) => {
    setEditingQuestion(question);
  };

  const handleSaveEdit = () => {
    if (editingQuestion) {
      updateQuestion(editingQuestion.id, {
        title: editingQuestion.title,
        question: editingQuestion.question,
        category: editingQuestion.category
      });
      setEditingQuestion(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Sorular</h2>
        <SearchFilters
          onSearch={setSearchTerm}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <QuestionTableHeader />
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredQuestions.map((question) => (
                <tr key={question.id}>
                  <td className="px-6 py-4">
                    {editingQuestion?.id === question.id ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={editingQuestion.title}
                          onChange={(e) => setEditingQuestion({
                            ...editingQuestion,
                            title: e.target.value
                          })}
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        />
                        <textarea
                          value={editingQuestion.question}
                          onChange={(e) => setEditingQuestion({
                            ...editingQuestion,
                            question: e.target.value
                          })}
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                          rows={3}
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={handleSaveEdit}
                            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                            Kaydet
                          </button>
                          <button
                            onClick={() => setEditingQuestion(null)}
                            className="px-3 py-1 text-gray-600 hover:text-gray-800"
                          >
                            İptal
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {question.title}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-2">
                          {question.question}
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {question.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{question.author.name}</div>
                    <div className="text-sm text-gray-500">{question.author.city}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {formatTimestamp(question.date)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(question)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Düzenle"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => deleteQuestion(question.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Sil"
                      >
                        <Trash2 size={18} />
                      </button>
                      <button
                        onClick={() => toggleQuestionStatus(
                          question.id,
                          question.status === 'published' ? 'hidden' : 'published'
                        )}
                        className={`${
                          question.status === 'published'
                            ? 'text-green-600 hover:text-green-900'
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                        title={question.status === 'published' ? 'Yayından Kaldır' : 'Yayınla'}
                      >
                        <Power size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};