import React from 'react';
import EmailAuthItem from './emailAuthItem';

interface Input {
  value: string;
  onChange: (value: string) => void;
}

interface EmailFromProps {
  emailInput: Input;
}

const EmailForm: React.FC<EmailFromProps> = ({ emailInput }) => (
  <>
    <EmailAuthItem
      value={emailInput.value}
      onChangeText={emailInput.onChange}
      placeholder=""
      keyboardType="email-address"
      secureTextEntry={false}
      returnKeyType="send"
    />
  </>
);

export default EmailForm;
