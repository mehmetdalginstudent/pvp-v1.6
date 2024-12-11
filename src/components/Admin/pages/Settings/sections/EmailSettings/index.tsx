import React from 'react';
import { SMTPConfig } from './SMTPConfig';
import { EmailTemplates } from './EmailTemplates';
import { EmailTest } from './EmailTest';

export const EmailSettings: React.FC = () => {
  return (
    <div className="space-y-8">
      <SMTPConfig />
      <EmailTest />
      <EmailTemplates />
    </div>
  );
};