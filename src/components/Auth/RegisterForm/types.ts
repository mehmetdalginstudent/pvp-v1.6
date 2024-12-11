export interface FormData {
  email: string;
  password: string;
  username: string;
  city: string;
  institutionType: string;
  institutionName: string;
  branch: string;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
  username?: string;
  city?: string;
  institutionType?: string;
  institutionName?: string;
  branch?: string;
}

export interface FormFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}