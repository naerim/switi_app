import React from 'react';
import styled from 'styled-components/native';
import Icon from '../../Img/icon_splash.png';

const Splash = () => {
  return (
    <Container>
      <SplashIcon source={Icon} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const SplashIcon = styled.Image`
  width: 170px;
  height: 62px;
`;

export default Splash;
