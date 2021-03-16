import React, {useState} from 'react';
import styled from 'styled-components/native';
import NicknameButton from './NicknameButton';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

interface Props {
  input: InputProps;
}

const NicknameContainer: React.FC<Props> = ({ input }) => {
  const [message, setMessage] = useState('');
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
        />
        <NicknameButton
          value={input.value}
          check={() => {
            setMessage('');
          }}
        />
      </InputContainer>
      <Warning>{message}</Warning>
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
  width: 70%;
  margin-right: 10px;
  border-width: 1px;
  color: #2b2b2b;
  border-color: #e3e3e3;
  border-radius: 4px;
  padding: 10px;
`;

const Warning = styled.Text`
  color: red;
  font-size: 12px;
`;

export default NicknameContainer;
