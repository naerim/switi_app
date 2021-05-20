import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import RecruitIcon from '../../../../Component/Icon/RecruitIcon';
import DetailHeader from '../DetailHeader';

interface Props {
  done?: boolean;
  onPress: () => void;
}

const StudyImage: React.FC<Props> = ({ done, onPress }) => {
  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <MainImage />
      <DetailHeader onPress={onPress} />
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
