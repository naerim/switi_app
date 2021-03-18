import React from 'react';
import styled from 'styled-components/native';
import AuthInput, { TextInputInterface } from './AuthInput';

interface AuthItemProps extends TextInputInterface {
  title: string;
}

const AuthItem: React.FC<AuthItemProps> = ({
  title,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  returnKeyType,
}) => (
  <Container>
    <Title>{title}</Title>
    <AuthInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      returnKeyType={returnKeyType}
    />
  </Container>
);

const Container = styled.View`
  width: 100%;
  padding: 0 10px;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  margin-bottom: 2%;
`;

export default AuthItem;
