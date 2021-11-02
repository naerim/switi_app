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
    <Text color={color}>{text}</Text>
  </Container>
);

const Container = styled.TouchableOpacity<ColorProps>`
  border-radius: 30px;
  height: 40px;
  width: 165px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || '#EEEEEE'};
`;

const Text = styled.Text<ColorProps>`
  color: ${(props) => (props.color ? '#ffffff' : '#b4b4b4')};
  text-align: center;
  font-weight: 600;
`;

export default TwoModalButton;
