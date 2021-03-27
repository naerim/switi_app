import React from 'react';
import styled from 'styled-components/native';
import { InputProps } from '../interface';

const AuthInput: React.FC<InputProps> = ({ input, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input
        value={input.value}
        onChangeText={input.onChange}
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
      />
    </Container>
  );
};

const Container = styled.View``;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  margin-bottom: 2%;
`;

const Input = styled.TextInput`
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: #e3e3e3;
  height: 40px;
`;

export default AuthInput;
