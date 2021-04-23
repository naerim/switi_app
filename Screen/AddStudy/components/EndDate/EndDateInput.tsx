import React from 'react';
import styled from 'styled-components/native';

const EndDateInput = () => {
  return (
    <Container>
      <Year />
      <Text>년</Text>
      <Date />
      <Text>월</Text>
      <Date />
      <Text>일</Text>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`;

const Year = styled.TextInput`
  width: 53px;
  height: 40px;
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: #e3e3e3;
`;

const Date = styled.TextInput`
  width: 37px;
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
  padding-left: 5px;
  padding-right: 20px;
`;

export default EndDateInput;
