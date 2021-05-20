import React from 'react';
import styled from 'styled-components/native';

interface Props {
  onPress: () => void;
}

const BottomButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Container>
      <ColorButton onPress={onPress}>
        <ButtonText>신청하기</ButtonText>
      </ColorButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 2;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 20px;
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
