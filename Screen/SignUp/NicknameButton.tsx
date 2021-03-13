import React from 'react';
import styled from 'styled-components/native';

const NicknameButton = () => {
  return (
    <Container>
      <ButtonText
        onPress={() => {
          console.log('btn');
        }}
      >
        중복확인
      </ButtonText>
    </Container>
  );
};

const Container = styled.View`
  width: 25%;
  background-color: #b4b4b4;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  height: 90%;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 12px;
`;

export default NicknameButton;
