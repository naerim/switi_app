import React from 'react';
import styled from 'styled-components/native';

interface SocialLoginButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  fontColor?: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  title,
  color,
  onPress,
  fontColor,
}) => (
  <Container onPress={onPress} color={color}>
    <Title fontColor={fontColor}>{title}로 로그인</Title>
  </Container>
);

const Container = styled.TouchableOpacity`
  position: relative;
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  background-color: ${({ color }: { color?: string }) => color || 'white'};
`;

const Title = styled.Text`
  font-size: 15px;
  color: ${({ fontColor }: { fontColor?: string }) => fontColor || 'white'};
`;

export default SocialLoginButton;
