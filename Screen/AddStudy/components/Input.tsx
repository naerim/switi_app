import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import AddStudyContainer from './Layout/AddStudyContainer';
import { InputProps } from '../interface';

interface TextProps {
  onlineFlag?: number;
}

const Input: React.FC<InputProps> = ({
  title,
  input,
  placeholder,
  onlineFlag,
}) => {
  const setValue = () => {
    if (onlineFlag) return onlineFlag == 0 ? '온라인' : input.value;
    return input.value;
  };

  const checkValue = () => {
    onlineFlag === 0 ? input.onChange('온라인') : input.onChange(input.value);
  };

  useEffect(() => {
    checkValue();
  }, [onlineFlag]);

  return (
    <AddStudyContainer title={title}>
      <MyInput
        onlineFlag={onlineFlag}
        value={setValue()}
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

const MyInput = styled.TextInput<TextProps>`
  font-size: 12px;
  border-width: 1px;
  color: ${(props) => (props.onlineFlag === 0 ? '#b4b4b4' : '#2b2b2b')}
  border-radius: 4px;
  padding: 10px;
  border-color: #e3e3e3;
  height: 40px;
`;

export default Input;
