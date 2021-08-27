import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import RecruitIcon from '../../../../Component/Icon/RecruitIcon';
import DetailHeader from '../DetailHeader';

interface Props {
  img: any;
  done?: boolean;
  onPress: () => void;
}

const StudyImage: React.FC<Props> = ({ img, done, onPress }) => {
  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <MainImage source={{ uri: img }} style={{ width: 40, height: 40 }} />
      <DetailHeader onPress={onPress} />
      <RecruitIcon done={done} use="StudyDetail" />
    </Container>
  );
};

const Container = styled.View`
  flex: 4;
`;

const MainImage = styled.Image`
  flex: 1;
  background-color: antiquewhite;
`;

export default StudyImage;
