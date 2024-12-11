import React, { useState } from 'react';
import { Mail, Send, TestTube } from 'lucide-react';

export const EmailTest: React.FC = () => {
  const [testEmail, setTestEmail] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleTestEmail = async () => {
    setIsTesting(true);
    setTestResult({});

    try {
      // Simulate SMTP test
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setTestResult({
        success: true,
        message: 'E-posta başarıyla gönderildi!'
      });
    } catch (error) {
      setTestResult({
        success: false,
        message: 'E-posta gönderilemedi. Lütfen ayarlarınızı kontrol edin.'
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <TestTube className="w-5 h-5 text-gray-500" />
          <h3 className="text-lg font-medium text-gray-900">E-posta Testi</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Test E-postası
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                placeholder="test@example.com"
                className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <button
            onClick={handleTestEmail}
            disabled={isTesting || !testEmail}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            {isTesting ? 'Gönderiliyor...' : 'Test Et'}
          </button>
        </div>

        {testResult.message && (
          <div className={`mt-4 p-4 rounded-lg ${
            testResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {testResult.message}
          </div>
        )}
      </div>
    </div>
  );
};