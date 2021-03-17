import React from 'react';
import styled from 'styled-components/native';
import { InputProps, WarningProps } from '../inteface';

const PasswordCheckInput: React.FC<InputProps> = ({ input, title, error }) => {
  const WarningColor = error !== ' ' ? 'red' : '#e3E3E3';
  return (
    <Container>
      <Title>{title}</Title>
      <Input
        value={input.value}
        onChangeText={input.onChange}
        placeholder="8자리 이상 영문, 숫자, 특수문자"
        keyboardType="numbers-and-punctuation"
        returnKeyType="next"
        secureTextEntry={true}
        color={WarningColor}
      />
      <Warning color={WarningColor}>{error}</Warning>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
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

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  padding-bottom: 1%;
`;

const Warning = styled.Text<WarningProps>`
  color: ${(props) => props.color};
  font-size: 9px;
  margin-top: 4px;
`;

export default PasswordCheckInput;
