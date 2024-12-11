import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, MapPin, School, Building } from 'lucide-react';
import { SecurityVerification } from '../SecurityVerification';
import { useAuthStore } from '../../../store/authStore';
import { FormData, ValidationErrors } from './types';
import { TextField, SelectField } from './components/FormField';
import { PasswordStrength } from './components/PasswordStrength';
import { CITIES, INSTITUTION_TYPES, BRANCHES } from './constants';
import { validateForm, isFormValid, validateEmail, validatePassword } from './validation';

export const RegisterFormContent: React.FC = () => {
  const navigate = useNavigate();
  const { register, error: authError } = useAuthStore();
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    username: '',
    city: '',
    institutionType: '',
    institutionName: '',
    branch: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isVerified, setIsVerified] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTouched(prev => ({ ...prev, [field]: true }));

    // Live validation
    if (field === 'email' && touched.email) {
      const emailError = validateEmail(value);
      setErrors(prev => ({ ...prev, email: emailError }));
    }
    if (field === 'password' && touched.password) {
      const passwordError = validatePassword(value);
      setErrors(prev => ({ ...prev, password: passwordError }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    
    if (!isVerified) {
      alert('Lütfen güvenlik doğrulamasını tamamlayın');
      return;
    }

    if (!isFormValid(formErrors)) {
      return;
    }

    await register(formData);
    if (!authError) {
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            E-posta Adresi
          </label>
          <TextField
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
            error={errors.email}
            type="email"
            placeholder="ornek@email.com"
            icon={<Mail className="h-5 w-5 text-gray-400" />}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Şifre
          </label>
          <TextField
            value={formData.password}
            onChange={(value) => handleChange('password', value)}
            error={errors.password}
            type="password"
            placeholder="••••••••"
            icon={<Lock className="h-5 w-5 text-gray-400" />}
          />
          <PasswordStrength password={formData.password} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Kullanıcı Adı
          </label>
          <TextField
            value={formData.username}
            onChange={(value) => handleChange('username', value)}
            error={errors.username}
            placeholder="Adınız ve Soyadınız"
            icon={<User className="h-5 w-5 text-gray-400" />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şehir
            </label>
            <SelectField
              value={formData.city}
              onChange={(value) => handleChange('city', value)}
              error={errors.city}
              options={CITIES.map(city => ({ value: city, label: city }))}
              placeholder="Şehir seçiniz"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Branş
            </label>
            <SelectField
              value={formData.branch}
              onChange={(value) => handleChange('branch', value)}
              error={errors.branch}
              options={BRANCHES}
              placeholder="Branş seçiniz"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kurum Türü
            </label>
            <SelectField
              value={formData.institutionType}
              onChange={(value) => handleChange('institutionType', value)}
              error={errors.institutionType}
              options={INSTITUTION_TYPES}
              placeholder="Kurum türü seçiniz"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kurum Adı
            </label>
            <TextField
              value={formData.institutionName}
              onChange={(value) => handleChange('institutionName', value)}
              error={errors.institutionName}
              placeholder="Çalıştığınız kurumun adı"
              icon={<Building className="h-5 w-5 text-gray-400" />}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <SecurityVerification onVerify={setIsVerified} />
      </div>

      {authError && (
        <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
          {authError}
        </div>
      )}

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        disabled={!isFormValid(errors) || !isVerified}
      >
        Kayıt Ol
      </button>
    </form>
  );
};