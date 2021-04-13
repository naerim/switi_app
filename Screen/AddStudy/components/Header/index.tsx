import React from 'react';
import styled from 'styled-components/native';
import BtnXIcon from '../../../../Img/btn_x_black.png';

interface Props {
  onPress: () => void;
}

const Header: React.FC<Props> = ({ onPress }) => {
  return (
    <Container>
      <Title>모집글 작성</Title>
      <PrevButton activeOpacity={0.8} onPress={onPress}>
        <ButtonImg source={BtnXIcon} />
      </PrevButton>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 46px;
  background-color: white;
  flex-direction: row;
`;

const Title = styled.Text`
  color: #2b2b2b;
  font-size: 14px;
  text-align: center;
`;

const PrevButton = styled.TouchableOpacity`
  position: absolute;
  right: 24px;
`;

const ButtonImg = styled.Image`
  width: 18px;
  height: 18px;
`;

export default Header;
