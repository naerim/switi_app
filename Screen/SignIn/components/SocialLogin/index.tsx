import React from 'react';
import styled from 'styled-components/native';
import SocialLoginButton from './SocialLoginButton';

const SocialLogin: React.FC = () => {
  const socialData = [
    {
      title: '네이버',
      onPress: () => console.log('네이버로 로그인'),
    },
    {
      title: '카카오',
      onPress: () => console.log('카카오로 로그인'),
    },
    {
      title: '구글',
      onPress: () => console.log('구글로 로그인'),
    },
  ];

  return (
    <Container>
      {socialData.map(({ title, onPress }) => (
        <SocialLoginButton key={title} title={title} onPress={onPress} />
      ))}
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  padding: 30px 0;
`;

export default SocialLogin;
