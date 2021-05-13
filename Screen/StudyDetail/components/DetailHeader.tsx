import React from 'react';
import styled from 'styled-components/native';
import BackIcon from '../../../Img/btn_back_w.png';
import MenuIcon from '../../../Img/icon_dot3.png';
import { Platform } from 'react-native';

interface Props {
  onPress: () => void;
}

const DetailHeader: React.FC<Props> = ({ onPress }) => {
  return (
    <Container style={{ top: Platform.OS === 'ios' ? 54 : 24 }}>
      <Wrap
        onPress={onPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Icon source={BackIcon} />
      </Wrap>
      <Wrap hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <RightIcon source={MenuIcon} />
      </Wrap>
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  font-size: 12px;
  left: 24px;
  right: 24px;
`;

const Wrap = styled.TouchableOpacity``;

const Icon = styled.Image`
  width: 18px;
  height: 18px;
`;

const RightIcon = styled.Image`
  width: 16px;
  height: 4px;
`;

export default DetailHeader;
