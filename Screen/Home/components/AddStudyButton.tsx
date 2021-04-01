import React from 'react';
import styled from 'styled-components/native';
import AddStudyIcon from '../../../Img/btn_addStudy.png';
import { useGoAddStudy } from '../../../util/navigationHooks';

const AddStudyButton = () => {
  const goAddStudy = useGoAddStudy();
  return (
    <Container activeOpacity={0.8} onPress={goAddStudy}>
      <ButtonImage source={AddStudyIcon} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const ButtonImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export default AddStudyButton;
