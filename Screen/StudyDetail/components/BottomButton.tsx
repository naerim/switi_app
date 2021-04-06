import React from 'react';
import styled from 'styled-components/native';

const BottomButton = () => {
  return (
    <Container>
      <ColorButton>
        <ButtonText>신청하기</ButtonText>
      </ColorButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  justify-content: flex-end;
`;

const ColorButton = styled.TouchableOpacity`
  background-color: #86e3c3;
  border-radius: 30px;
  height: 40px;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  color: white;
  text-align: center;
`;

export default BottomButton;
