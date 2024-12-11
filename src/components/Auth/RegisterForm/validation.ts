import { FormData, ValidationErrors } from './types';

export const validateEmail = (email: string): string | undefined => {
  if (!email) return 'E-posta adresi gereklidir';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Geçerli bir e-posta adresi giriniz';
  }
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) return 'Şifre gereklidir';
  if (password.length < 8) return 'Şifre en az 8 karakter olmalıdır';
  if (!/\d/.test(password)) return 'Şifre en az bir rakam içermelidir';
  if (!/[A-Z]/.test(password)) return 'Şifre en az bir büyük harf içermelidir';
  if (!/[a-z]/.test(password)) return 'Şifre en az bir küçük harf içermelidir';
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return 'Şifre en az bir özel karakter içermelidir';
  }
};

export const validateForm = (data: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const passwordError = validatePassword(data.password);
  if (passwordError) errors.password = passwordError;

  if (!data.username) errors.username = 'Kullanıcı adı gereklidir';
  if (!data.city) errors.city = 'Şehir seçiniz';
  if (!data.institutionType) errors.institutionType = 'Kurum türü seçiniz';
  if (!data.institutionName) errors.institutionName = 'Kurum adı gereklidir';
  if (!data.branch) errors.branch = 'Branş seçiniz';

  return errors;
};

export const isFormValid = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length === 0;
};