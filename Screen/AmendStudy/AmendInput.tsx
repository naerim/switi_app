import React from 'react';
import styled from 'styled-components/native';
import { InputProps } from '../AddStudy/interface';
import AddStudyContainer from '../AddStudy/components/Layout/AddStudyContainer';

interface TextProps {
  onlineFlag?: number;
}

const AmendInput: React.FC<InputProps> = ({
  title,
  input,
  placeholder,
  onlineFlag,
}) => {
  return (
    <AddStudyContainer title={title}>
      <MyInput
        value={input.value}
        onChangeText={input.onChange}
        placeholder={placeholder}
        keyboardType="default"
        returnKeyType="next"
        secureTextEntry={false}
        editable={onlineFlag !== 0}
      />
    </AddStudyContainer>
  );
};

const MyInput = styled.TextInput<TextProps>`
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: #e3e3e3;
  height: 40px;
`;

export default AmendInput;
