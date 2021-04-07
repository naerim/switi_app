import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { useGoHome } from '../../../util/navigationHooks';
import BackIcon from '../../../Img/btn_back_w.png';
import RecruitIcon from '../../../Component/Icon/RecruitIcon';

interface Props {
  done?: boolean;
}

const StudyImage: React.FC<Props> = ({ done }) => {
  const goHome = useGoHome();

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <MainImage />
      <PrevButton
        onPress={goHome}
        style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}
      >
        <Icon source={BackIcon} />
      </PrevButton>
      <RecruitIcon done={done} use="StudyDetail" />
    </Container>
  );
};

const Container = styled.View`
  flex: 3;
`;

const MainImage = styled.View`
  flex: 1;
  background-color: #ffeec9;
`;

const PrevButton = styled.TouchableOpacity`
  position: absolute;
  font-size: 12px;
  left: 24px;
  top: 24px;
`;

const Icon = styled.Image`
  width: 18px;
  height: 18px;
`;

export default StudyImage;
