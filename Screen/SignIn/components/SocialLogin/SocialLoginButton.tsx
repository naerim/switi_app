import React from 'react';
import styled from 'styled-components/native';
import { ImageProps } from 'react-native';

interface SocialLoginButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  fontColor?: string;
  imageSource: ImageProps;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  title,
  color,
  onPress,
  fontColor,
  imageSource,
}) => (
  <Container onPress={onPress} color={color}>
    <SocialIcon source={imageSource} />
    <TitleContainer>
      <Title fontColor={fontColor}>{title}로 로그인</Title>
    </TitleContainer>
  </Container>
);

const Container = styled.TouchableOpacity`
  position: relative;
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 10px;
  margin: 10px;
  background-color: ${({ color }: { color?: string }) => color || 'white'};
  flex-direction: row;
`;

const TitleContainer = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90%;
`;
const Title = styled.Text`
  font-size: 15px;
  color: ${({ fontColor }: { fontColor?: string }) => fontColor || 'white'};
`;

const SocialIcon = styled.Image`
  width: 15px;
  height: 15px;
`;

export default SocialLoginButton;
