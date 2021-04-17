import React from 'react';
import styled from 'styled-components/native';
import AddStudyContainer from './Layout/AddStudyContainer';
import { InputProps } from '../interface';

const Input: React.FC<InputProps> = ({ title, input, placeholder }) => {
  return (
    <AddStudyContainer title={title}>
      <MyInput
        value={input.value}
        onChangeText={input.onChange}
        placeholder={placeholder}
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
      />
    </AddStudyContainer>
  );
};

const MyInput = styled.TextInput`
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: #e3e3e3;
  height: 40px;
`;

export default Input;
