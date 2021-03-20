import React from 'react';
import styled from 'styled-components/native';
import SocialLoginButton from './SocialLoginButton';

const SocialLogin: React.FC = () => {
  const socialData = [
    {
      title: '네이버',
      onPress: () => console.log('네이버로 로그인'),
      color: '#40A436',
      fontcolor: '#fff',
      imageSource: './i_google.png',
    },
    {
      title: '카카오',
      onPress: () => console.log('카카오로 로그인'),
      color: '#FFDF00',
      fontcolor: '#fff',
      imageSource: './i_google.png',
    },
    {
      title: '구글',
      onPress: () => console.log('구글로 로그인'),
      fontcolor: '#707071',
      imageSource: './i_google.png',
    },
  ];

  return (
    <Container>
      {socialData.map(({ title, onPress, color, fontcolor }) => (
        <SocialLoginButton
          key={title}
          title={title}
          onPress={onPress}
          color={color}
          fontColor={fontcolor}
        />
      ))}
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  padding: 30px 0;
`;

export default SocialLogin;
