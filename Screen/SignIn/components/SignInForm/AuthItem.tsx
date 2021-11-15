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
    <AuthInputContainer>
      <AuthInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
      />
    </AuthInputContainer>
  </Container>
);

const Container = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  flex: 0.5px;
`;

const AuthInputContainer = styled.View`
  flex: 2;
`;

export default AuthItem;
