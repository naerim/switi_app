import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

const BottomButton = () => {
  return (
    <Container style={{ paddingBottom: Platform.OS === 'ios' ? 0 : 20 }}>
      <ColorButton>
        <ButtonText>신청하기</ButtonText>
      </ColorButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 2;
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
