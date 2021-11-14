import React from 'react';
import styled from 'styled-components/native';
import background from '../../Img/splash_background.png';

const Splash = () => {
  return (
    <Container>
      <Background source={background}></Background>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: blue;
`;

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export default Splash;
