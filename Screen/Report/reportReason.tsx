import React from 'react';
import styled from 'styled-components/native';
import { InputProps } from './interface';

const ReasonText: React.FC<InputProps> = ({ input }) => {
  return (
    <InputContainer>
      <Input
        value={input.value}
        onChangeText={input.onChange}
        placeholder="신고사유를 작성해주세요"
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
        multiline
        numberOfLines={4}
        maxLength={400}
        textAlignVertical="top"
      />
    </InputContainer>
  );
};

const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 4px;
  height: 40px;
  font-size: 12px;
  border-color: #e3e3e3;
  padding: 10px;
  margin-top: 10px;
`;

const InputContainer = styled.View`
  flex: 3;
  margin-top: 5px;
`;

export default ReasonText;
