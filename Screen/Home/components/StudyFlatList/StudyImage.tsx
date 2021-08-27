import React from 'react';
import styled from 'styled-components/native';
import RecruitIcon from '../../../../Component/Icon/RecruitIcon';

interface Props {
  img: any;
  done: boolean;
}

const StudyImage: React.FC<Props> = ({ img, done }) => {
  return (
    <Container>
      <Images source={{ uri: img }} style={{ width: 10, height: 10 }} />
      <RecruitIcon done={!done} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 84px;
  height: 84px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
`;

const Images = styled.Image`
  background-color: aquamarine;
`;

export default StudyImage;
