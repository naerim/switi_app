import React, { useState } from 'react';
import styled from 'styled-components/native';
import NicknameButton from './NicknameButton';
import { InputProps, Status, WarningProps } from '../../inteface';

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

const NicknameContainer: React.FC<InputProps> = ({ input, error, confirm }) => {
  const [message, setMessage] = useState(' ');
  const onChange = (state: boolean) => {
    confirm?.setConfirm(state);
  };

  return (
    <Container>
      <InputContainer>
        <Input
          value={input.value}
          onChangeText={input.onChange}
          placeholder="공백, 특수문자 불가"
          keyboardType="default"
          returnKeyType="next"
          secureTextEntry={false}
          status={error.status}
          editable={message !== '멋진 닉네임이네요!'}
        />
        <NicknameButton
          disabled={message === '멋진 닉네임이네요!'}
          check={() => {
            onChange(true);
            setMessage(error.text);
          }}
        />
      </InputContainer>
      <Warning color={message !== '멋진 닉네임이네요!'}>{message}</Warning>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
`;

const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.TextInput`
  font-size: 12px;
  width: 70%;
  margin-right: 10px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: ${getColor};
`;

const Warning = styled.Text<WarningProps>`
  color: ${(props) => (props.color ? 'red' : '#4fd5a7')};
  font-size: 9px;
  margin-top: 2px;
`;

export default NicknameContainer;
