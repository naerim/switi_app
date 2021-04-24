import React from 'react';
import styled from 'styled-components/native';

const NumInput = () => {
  return (
    <Container>
      <Input />
      <Text>명</Text>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Input = styled.TextInput`
  width: 53px;
  height: 40px;
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: #e3e3e3;
`;

const Text = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
  padding-left: 10px;
`;

export default NumInput;
