import React from 'react';
import styled from 'styled-components/native';

const WithdrawButton = () => {
  return (
    <Container>
      <Title>탈퇴시키기</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  width: 62px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #86e3c3;
  border-radius: 20px;
`;

const Title = styled.Text`
  font-size: 11px;
  color: #ffffff;
`;

export default WithdrawButton;
