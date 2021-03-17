import React from 'react';
import styled from 'styled-components/native';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

interface Props {
  input: InputProps;
}

const EmailInput: React.FC<Props> = ({ input }) => {
  return (
    <Container>
      <Input
        value={input.value}
        onChangeText={input.onChange}
        placeholder="abc@dfg.com"
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
      />
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
`;

const Input = styled.TextInput`
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-color: #e3e3e3;
  border-radius: 4px;
  padding: 10px;
`;

export default EmailInput;
