import React from 'react';
import ModalAuthItem from './ModalAuthItem';

interface Input {
  value: string;
  onChange: (value: string) => void;
}

interface EmailFromProps {
  emailInput: Input;
}

const ModalForm: React.FC<EmailFromProps> = ({ emailInput }) => (
  <ModalAuthItem
    value={emailInput.value}
    onChangeText={emailInput.onChange}
    placeholder=""
    keyboardType="email-address"
    secureTextEntry={false}
    returnKeyType="send"
  />
);

export default ModalForm;
