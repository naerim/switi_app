import React from 'react';
import styled from 'styled-components/native';
import ProfileContent from './Layout/ProfileContent';
import { InputProps } from '../interface';

const Introduce: React.FC<InputProps> = ({ input }) => {
  return (
    <ProfileContent title="자기소개">
      <Input
        value={input.value}
        onChangeText={input.onChange}
        placeholder="취미, 희망직무 등 나에 대해 간단히 소개해 주세요 (10자 이상)"
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
        multiline
        numberOfLines={4}
        maxLength={250}
        textAlignVertical="top"
      />
    </ProfileContent>
  );
};

const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 4px;
  height: 150px;
  font-size: 12px;
  border-color: #e3e3e3;
  padding: 10px;
`;

export default Introduce;
