import React from 'react';
import styled from 'styled-components/native';

interface Props {
  buttonText: string;
  onClick: () => void;
  disabled: boolean;
}

const NextButton: React.FC<Props> = ({ buttonText, onClick, disabled }) => {
  return (
    <Content>
      <Container activeOpacity={0.8} onPress={onClick} disabled={disabled}>
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
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  height: 40px;
  background-color: ${(props) => (props.disabled ? '#dcdcdc' : '#86e3c3')};
`;

const ButtonText = styled.Text`
  font-size: 14px;
  color: white;
`;

export default NextButton;
