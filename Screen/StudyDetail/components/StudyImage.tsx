import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { useGoHome } from '../../../util/navigationHooks';
import BackIcon from '../../../Img/btn_back_w.png';

const StudyImage = () => {
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
    </Container>
  );
};

const Container = styled.View`
  height: 30%;
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
