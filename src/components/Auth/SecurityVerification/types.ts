export type VerificationType = 'math' | 'image';

export interface VerificationChallenge {
  type: VerificationType;
  question: string;
  answer: string;
  options?: string[];
}

export interface SecurityVerificationProps {
  onVerify: (verified: boolean) => void;
}