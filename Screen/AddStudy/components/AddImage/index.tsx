import React from 'react';
import styled from 'styled-components/native';
import PlusIcon from '../../../../Img/btn_plus_white.png';

const AddImage = () => {
  return (
    <Container activeOpacity={0.8}>
      <Button source={PlusIcon} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: #e3e3e3;
  align-items: center;
  justify-content: center;
  height: 220px;
`;

const Button = styled.Image`
  width: 45px;
  height: 45px;
`;

export default AddImage;
