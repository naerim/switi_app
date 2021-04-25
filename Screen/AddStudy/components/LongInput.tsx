import React from 'react';
import styled from 'styled-components/native';
import AddStudyContainer from './Layout/AddStudyContainer';
import { LongInputProps } from '../interface';

const LongInput: React.FC<LongInputProps> = ({ input }) => {
  return (
    <AddStudyContainer title="내용">
      <Input
        value={input.value}
        onChangeText={input.onChange}
        placeholder="스터디 모집내용을 입력해주세요"
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
        multiline
        numberOfLines={4}
        maxLength={250}
        textAlignVertical="top"
      />
    </AddStudyContainer>
  );
};

const Input = styled.TextInput`
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: #e3e3e3;
  height: 180px;
  margin-bottom: 20px;
`;

export default LongInput;
