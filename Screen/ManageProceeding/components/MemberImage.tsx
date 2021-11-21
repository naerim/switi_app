import React from 'react';
import styled from 'styled-components/native';
import ProfileImage from '../../../Img/icon_profile.png';

interface Props {
  img: any;
}

const MemberImage: React.FC<Props> = ({ img }) => {
  return (
    <Container>
      <Images source={ProfileImage} resizeMode="stretch" />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  margin-top: 12px;
`;

const Images = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 60px;
`;

export default MemberImage;
