import React from 'react';
import styled from 'styled-components/native';
import SocialLoginButton from './SocialLoginButton';
import google from '../../../../Img/icon_google.png';
import naver from '../../../../Img/icon_naver.png';
import kakao from '../../../../Img/icon_kakao.png';

const SocialLogin: React.FC = () => {
  const socialData = [
    {
      title: '네이버',
      onPress: () => console.log('네이버로 로그인'),
      color: '#40A436',
      fontcolor: '#fff',
      imageSource: naver,
    },
    {
      title: '카카오',
      onPress: () => console.log('카카오로 로그인'),
      color: '#FFDF00',
      fontcolor: '#fff',
      imageSource: kakao,
    },
    {
      title: '구글',
      onPress: () => console.log('구글로 로그인'),
      fontcolor: '#707071',
      imageSource: google,
    },
  ];

  return (
    <Container>
      {socialData.map(({ title, onPress, color, fontcolor, imageSource }) => (
        <SocialLoginButton
          key={title}
          title={title}
          onPress={onPress}
          color={color}
          fontColor={fontcolor}
          imageSource={imageSource}
        />
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default SocialLogin;
