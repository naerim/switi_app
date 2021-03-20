import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const ModalOption = () => {
  return (
    <Container>
      <ItemContainer>
        <Text>인증번호를 받지 못했나요?</Text>
        <Answer>인증번호 재전송</Answer>
      </ItemContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 0 55px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

const Answer = styled.Text`
  color: #b4b4b4;
  text-decoration: #b4b4b4 underline;
`;

export default ModalOption;
