import React from 'react';
import styled from 'styled-components/native';
import ProfileContent from './Layout/ProfileContent';

const InterestField = () => {
  return (
    <ProfileContent title="관심분야 (3개 이하 선택)">
      <Input
        value="선택해주세요"
        placeholder="abc@dfg.com"
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
      />
    </ProfileContent>
  );
};

const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 4px;
  font-size: 12px;
  height: 36px;
  border-color: #e3e3e3;
  text-align: center;
`;

export default InterestField;
