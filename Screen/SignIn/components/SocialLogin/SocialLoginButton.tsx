import React from 'react';
import styled from 'styled-components/native';

interface SocialLoginButtonProps {
  title: string;
  onPress: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  title,
  onPress,
}) => (
  <Container onPress={onPress}>
    <Title>{title}로 로그인</Title>
  </Container>
);

const Container = styled.TouchableOpacity`
  position: relative;
  background-color: #fff;
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
`;

const Title = styled.Text`
  color: #b4b4b4;
  font-size: 15px;
`;

export default SocialLoginButton;
