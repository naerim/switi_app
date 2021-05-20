import React from 'react';
import styled from 'styled-components/native';
import { LongInputProps } from '../../interface';

const ReasonInput: React.FC<LongInputProps> = ({ input }) => {
  return (
    <Container>
      <Title>신청사유</Title>
      <Input
        value={input.value}
        onChangeText={input.onChange}
        placeholder="간단한 신청 사유를 적어주세요."
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
        multiline
        numberOfLines={4}
        maxLength={150}
        textAlignVertical="top"
      />
    </Container>
  );
};

const Container = styled.View``;

const Title = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
  margin-bottom: 2%;
`;

const Input = styled.TextInput`
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: #e3e3e3;
  height: 100px;
  margin-bottom: 20px;
`;

export default ReasonInput;
