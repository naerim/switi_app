import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import RecruitIcon from '../../../../Component/Icon/RecruitIcon';
// import DetailHeader from '../DetailHeader';
import ScrapHeader from '../ScrapHeader';

interface Props {
  img: any;
  done?: boolean;
  onPress: () => void;
  id: number;
}

// 모집글인 경우 DetailHeader
// 아닌 경우 ScrapHeader

const StudyImage: React.FC<Props> = ({ img, done, onPress, id }) => {
  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <MainImage source={{ uri: img }} />
      <ScrapHeader onPress={onPress} id={id} />
      {/*<DetailHeader onPress={onPress} />*/}
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
