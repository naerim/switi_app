import React from 'react';
import styled from 'styled-components/native';
import { InputProps, WarningProps } from '../inteface';

const EmailInput: React.FC<InputProps> = ({ input, error }) => {
  const WarningColor = error !== ' ' ? 'red' : '#4FD5A7';
  return (
    <Container>
      <Input
        value={input.value}
        onChangeText={input.onChange}
        placeholder="abc@dfg.com"
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
        color={WarningColor}
      />
      <Warning color={WarningColor}>{error}</Warning>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
`;

const Input = styled.TextInput<WarningProps>`
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: ${(props) => props.color};
`;

const Warning = styled.Text<WarningProps>`
  color: ${(props) => props.color};
  font-size: 9px;
  margin-top: 4px;
`;

export default EmailInput;
