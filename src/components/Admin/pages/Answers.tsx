import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Trash2, Edit2, Eye, Power } from 'lucide-react';
import { useAnswerStore } from '../../../store/answerStore';
import { formatTimestamp } from '../../../utils/dateUtils';

export const Answers: React.FC = () => {
  const { questions, updateAnswer, deleteAnswer, toggleAnswerStatus } = useAnswerStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>('');
  const [editingAnswer, setEditingAnswer] = useState<{
    questionId: number;
    answerId: number;
    content: string;
  } | null>(null);

  // Flatten all answers with their question context
  const allAnswers = questions.flatMap(question =>
    question.answers.map(answer => ({
      ...answer,
      question: {
        id: question.id,
        title: question.title
      }
    }))
  );

  const filteredAnswers = allAnswers.filter(answer => {
    const matchesSearch = answer.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         answer.question.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesQuestion = !selectedQuestionId || answer.question.id.toString() === selectedQuestionId;
    return matchesSearch && matchesQuestion;
  });

  const handleEdit = (questionId: number, answerId: number, content: string) => {
    setEditingAnswer({ questionId, answerId, content });
  };

  const handleSaveEdit = () => {
    if (editingAnswer) {
      updateAnswer(editingAnswer.questionId, editingAnswer.answerId, editingAnswer.content);
      setEditingAnswer(null);
    }
  };

  const handleToggleStatus = (questionId: number, answerId: number) => {
    toggleAnswerStatus(questionId, answerId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Cevaplar</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
          <select
            value={selectedQuestionId}
            onChange={(e) => setSelectedQuestionId(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Tüm Sorular</option>
            {questions.map(q => (
              <option key={q.id} value={q.id}>{q.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cevap
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Soru
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Yazar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tarih
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Etkileşim
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAnswers.map((answer) => (
                <tr key={answer.id} className={answer.status === 'hidden' ? 'bg-gray-50' : ''}>
                  <td className="px-6 py-4">
                    {editingAnswer?.answerId === answer.id ? (
                      <div className="flex gap-2">
                        <textarea
                          value={editingAnswer.content}
                          onChange={(e) => setEditingAnswer({
                            ...editingAnswer,
                            content: e.target.value
                          })}
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                          rows={3}
                        />
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={handleSaveEdit}
                            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                            Kaydet
                          </button>
                          <button
                            onClick={() => setEditingAnswer(null)}
                            className="px-3 py-1 text-gray-600 hover:text-gray-800"
                          >
                            İptal
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-900 line-clamp-3">
                        {answer.content}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{answer.question.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{answer.author.name}</div>
                    <div className="text-sm text-gray-500">{answer.author.city}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {formatTimestamp(answer.date)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center text-green-600">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {answer.likes}
                      </span>
                      <span className="flex items-center text-red-600">
                        <ThumbsDown className="w-4 h-4 mr-1" />
                        {answer.dislikes}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      answer.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {answer.status === 'published' ? 'Yayında' : 'Gizli'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(answer.question.id, answer.id, answer.content)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Düzenle"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => deleteAnswer(answer.question.id, answer.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Sil"
                      >
                        <Trash2 size={18} />
                      </button>
                      <button
                        onClick={() => handleToggleStatus(answer.question.id, answer.id)}
                        className={`${
                          answer.status === 'published'
                            ? 'text-green-600 hover:text-green-900'
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                        title={answer.status === 'published' ? 'Gizle' : 'Yayınla'}
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