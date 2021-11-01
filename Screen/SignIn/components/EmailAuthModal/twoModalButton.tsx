import React from 'react';
import styled from 'styled-components/native';

interface AuthButtonProps {
  text: string;
  onPress: () => void;
  color?: string;
}

interface ColorProps {
  color?: string;
}

const TwoModalButton: React.FC<AuthButtonProps> = ({
  text,
  onPress,
  color,
}) => (
  <Container onPress={onPress} color={color}>
    <Text>{text}</Text>
  </Container>
);

const Container = styled.TouchableOpacity<ColorProps>`
  border-radius: 30px;
  height: 40px;
  width: 160px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || '#b4b4b4'};
`;

const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

export default TwoModalButton;
