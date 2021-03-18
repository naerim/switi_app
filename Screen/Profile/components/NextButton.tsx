import React from 'react';
import styled from 'styled-components/native';

interface Props {
  buttonText: string;
  onClick: () => void;
}

const NextButton: React.FC<Props> = ({ buttonText, onClick }) => {
  return (
    <Content>
      <Container activeOpacity={0.8} onPress={onClick}>
        <ButtonText>{buttonText}</ButtonText>
      </Container>
    </Content>
  );
};

const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

const Container = styled.TouchableOpacity`
  background-color: #86e3c3;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  height: 60%;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  color: white;
`;

export default NextButton;
