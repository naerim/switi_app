import React from 'react';
import styled from 'styled-components/native';
import { InputProps, Status } from '../../SignUp/inteface';

const getColor = ({ status }: { status: Status }) => {
  switch (status) {
    case Status.NORMARL:
      return '#e3e3e3';
    case Status.SUCCESS:
      return '#4fd5a7';
    case Status.ERROR:
      return '#ff0000';
    default:
      return '#e3e3e3';
  }
};

const EmailInput: React.FC<InputProps> = ({ input, error }) => {
  return (
    <Container>
      <Input
        value={input.value}
        onChangeText={input.onChange}
        placeholder="purplecode@naver.com"
        placeholderTextColor="black"
        editable={false}
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
        status={error.status}
      />
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

const Input = styled.TextInput`
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: ${getColor};
`;

export default EmailInput;
