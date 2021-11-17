import React from 'react';
import styled from 'styled-components/native';
import Profile from '../../Img/icon_profile.png';

const MyImage = () => {
  return (
    <Container>
      <UserImage source={Profile} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 40px;
`;

export default MyImage;
