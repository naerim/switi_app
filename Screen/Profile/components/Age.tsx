import React from 'react';
import styled from 'styled-components/native';
import ProfileContent from './Layout/ProfileContent';

const Age = () => {
  return (
    <ProfileContent title="연령">
      <Container>
        <SmallText>만</SmallText>
        <Input
          value="hi"
          placeholder="abc@dfg.com"
          keyboardType="email-address"
          returnKeyType="next"
          secureTextEntry={false}
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
