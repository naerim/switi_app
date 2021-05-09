import React from 'react';
import AuthInput from '../SignInForm/AuthInput';
import styled from 'styled-components/native';

interface Input {
  value: string;
  onChange: (value: string) => void;
}

interface EmailFromProps {
  emailInput: Input;
}

const ModalForm: React.FC<EmailFromProps> = ({ emailInput }) => (
  <Container>
    <AuthInput
      value={emailInput.value}
      onChangeText={emailInput.onChange}
      placeholder=""
      keyboardType="email-address"
      secureTextEntry={false}
      returnKeyType="send"
    />
  </Container>
);

const Container = styled.View`
  padding-top: 30px;
  width: 90%;
`;

export default ModalForm;
