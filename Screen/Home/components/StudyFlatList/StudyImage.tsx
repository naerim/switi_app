import React from 'react';
import styled from 'styled-components/native';
import RecruitIcon from '../../../../Component/Icon/RecruitIcon';

interface Props {
  img: any;
  done: boolean;
}

const StudyImage: React.FC<Props> = ({ img, done }) => {
  // 이미지 불러오기
  const loadImg = (url: string) => {
    return 'http://localhost:4000/images/' + url;
  };

  return (
    <Container>
      <Images source={{ uri: loadImg(img) }} resizeMode="stretch" />
      <RecruitIcon done={!done} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  margin-top: 12px;
`;

const Images = styled.Image`
  background-color: #ffeec9;
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 9px;
`;

export default StudyImage;
