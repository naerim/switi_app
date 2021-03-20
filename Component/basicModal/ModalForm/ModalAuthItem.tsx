import React from 'react';
import styled from 'styled-components/native';
import AuthInput, {
  TextInputInterface,
} from '../../../Screen/SignIn/components/SignInForm/AuthInput';

const ModalAuthItem: React.FC<TextInputInterface> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  returnKeyType,
}) => (
  <Container>
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
  padding: 0 55px;
`;

export default ModalAuthItem;
