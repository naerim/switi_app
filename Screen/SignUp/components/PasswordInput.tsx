import React from 'react';
import styled from 'styled-components/native';
import { InputProps, WarningProps } from '../inteface';

const PasswordInput: React.FC<InputProps> = ({ input, error }) => {
  const WarningColor = error !== ' ' ? 'red' : '#4FD5A7';
  return (
    <Container>
      <Input
        value={input.value}
        onChangeText={input.onChange}
        placeholder="8자리 이상 영문, 숫자, 특수문자"
        keyboardType="numbers-and-punctuation"
        returnKeyType="next"
        secureTextEntry={true}
        color={WarningColor}
      />
      <VisibilityIcon>
        <Icon
          source={
            WarningColor === 'red'
              ? require('../../../Img/icon_lock.png')
              : require('../../../Img/icon_unlock.png')
          }
          resizeMode="contain"
        />
      </VisibilityIcon>
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

const VisibilityIcon = styled.View`
  position: absolute;
  right: 10px;
  top: 8px;
`;

const Icon = styled.Image`
  height: 20px;
  width: 18px;
`;

const Warning = styled.Text<WarningProps>`
  color: ${(props) => props.color};
  font-size: 9px;
  margin-top: 2px;
`;

export default PasswordInput;
