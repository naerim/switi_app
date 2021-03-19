import React, { useState } from 'react';
import styled from 'styled-components/native';
import NicknameButton from './NicknameButton';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

interface Props {
  input: InputProps;
}

interface WarningColor {
  warning: string;
}

const NicknameContainer: React.FC<Props> = ({ input }) => {
  const [warning, setWarning] = useState('#E3E3E3');
  const [message, setMessage] = useState(' ');

  const special = /[~!@#$%^&*()_+|<>?:{}]/;
  const checkNickname = (value: string) => {
    if (value == '' || value == null) {
      setWarning('red');
      return '필수 정보입니다.';
    } else if (special.test(value) || value.search(/\s/) != -1) {
      setWarning('red');
      return '공백, 특수문자는 사용 불가합니다.';
    } else {
      setWarning('#4fd5a7');
      return '멋진 닉네임이네요!';
    }
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
          warning={warning}
        />
        <NicknameButton
          value={input.value}
          check={() => {
            setMessage(checkNickname(input.value));
          }}
        />
      </InputContainer>
      <Warning warning={warning}>{message}</Warning>
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

const Input = styled.TextInput<WarningColor>`
  font-size: 12px;
  width: 70%;
  margin-right: 10px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: ${(props) => props.warning};
`;
const Warning = styled.Text<WarningColor>`
  color: ${(props) => props.warning};
  font-size: 9px;
  margin-top: 2px;
`;

export default NicknameContainer;
