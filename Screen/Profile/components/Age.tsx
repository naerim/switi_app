import React from 'react';
import styled from 'styled-components/native';
import ProfileContent from './Layout/ProfileContent';
import { InputProps } from '../interface';

const Age: React.FC<InputProps> = ({ input }) => {
  return (
    <ProfileContent title="연령">
      <Container>
        <SmallText>만</SmallText>
        <Input
          value={input.value}
          onChangeText={input.onChange}
          placeholder="25"
          keyboardType="numbers-and-punctuation"
          returnKeyType="next"
          secureTextEntry={false}
          maxLength={2}
        />
        <SmallText>세</SmallText>
      </Container>
    </ProfileContent>
  );
};

const Container = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
`;

const SmallText = styled.Text`
  font-size: 12px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 4px;
  font-size: 12px;
  width: 40px;
  height: 36px;
  border-color: #e3e3e3;
  text-align: center;
  margin: 0 5px;
`;

export default Age;
