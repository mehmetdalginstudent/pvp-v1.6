import React, { useState, useEffect } from 'react';
import { RefreshCw, Check, X } from 'lucide-react';
import { SecurityVerificationProps, VerificationChallenge } from './types';
import { generateMathChallenge, generateImageChallenge } from './utils';

export const SecurityVerification: React.FC<SecurityVerificationProps> = ({ onVerify }) => {
  const [challenge, setChallenge] = useState<VerificationChallenge | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  const generateChallenge = () => {
    // Alternate between math and image challenges
    const type = attempts % 2 === 0 ? 'math' : 'image';
    const newChallenge = type === 'math' 
      ? { type, ...generateMathChallenge() }
      : { type, ...generateImageChallenge() };
    setChallenge(newChallenge);
    setUserAnswer('');
    setError('');
  };

  useEffect(() => {
    generateChallenge();
  }, [attempts]);

  const handleSubmit = (answer: string) => {
    if (challenge && answer === challenge.answer) {
      setIsVerified(true);
      onVerify(true);
    } else {
      setAttempts(prev => prev + 1);
      setError('Yanlış cevap. Lütfen tekrar deneyin.');
      setTimeout(generateChallenge, 1000);
    }
  };

  if (isVerified) {
    return (
      <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
        <Check className="w-5 h-5" />
        <span>Doğrulama başarılı!</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700">Güvenlik Doğrulaması</h3>
        <button
          onClick={generateChallenge}
          className="text-gray-500 hover:text-gray-700"
          title="Yeni soru"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {challenge && (
        <div className="bg-gray-50 rounded-lg p-4">
          {challenge.type === 'math' ? (
            <div className="space-y-3">
              <p className="text-lg font-medium text-center">{challenge.question}</p>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Cevabınızı girin"
              />
              <button
                onClick={() => handleSubmit(userAnswer)}
                className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
              >
                Doğrula
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-center">
                <img
                  src={challenge.question}
                  alt="Verification challenge"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-center text-gray-600">Resimdeki nesneyi seçin:</p>
              <div className="grid grid-cols-2 gap-2">
                {challenge.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSubmit(option)}
                    className="bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
          <X className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};