import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { useGoHome } from '../../../../util/navigationHooks';
import RecruitIcon from '../../../../Component/Icon/RecruitIcon';
import ImageHeader from './ImageHeader';

interface Props {
  done?: boolean;
}

const StudyImage: React.FC<Props> = ({ done }) => {
  const goHome = useGoHome();

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <MainImage />
      <ImageHeader onPress={goHome} />
      <RecruitIcon done={done} use="StudyDetail" />
    </Container>
  );
};

const Container = styled.View`
  flex: 4;
`;

const MainImage = styled.View`
  flex: 1;
  background-color: #fdc4bd;
`;

export default StudyImage;
