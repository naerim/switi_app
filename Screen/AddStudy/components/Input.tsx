import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import AddStudyContainer from './Layout/AddStudyContainer';
import { InputProps } from '../interface';

const Input: React.FC<InputProps> = ({
  title,
  input,
  placeholder,
  onlineFlag,
}) => {
  const setValue = () => {
    onlineFlag === 0 && input.onChange('온라인');
  };

  useEffect(() => {
    setValue();
  }, [onlineFlag]);

  return (
    <AddStudyContainer title={title}>
      <MyInput
        value={onlineFlag === 0 ? '온라인' : input.value}
        onChangeText={input.onChange}
        placeholder={placeholder}
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
        editable={onlineFlag !== 0}
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
