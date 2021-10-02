import React from 'react';
import styled from 'styled-components/native';
import ProfileImage from '../../../Img/icon_profile.png';

interface Props {
  img: any;
}

const MemberImage: React.FC<Props> = ({ img }) => {
  // 이미지 불러오기
  // const loadImg = (url: string) => {
  //   return 'http://localhost:4000/images/' + url;
  // };
  // <Images source={{ uri: loadImg(img) }} resizeMode="stretch" />

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
  background-color: #ffeec9;
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 60px;
`;

export default MemberImage;
