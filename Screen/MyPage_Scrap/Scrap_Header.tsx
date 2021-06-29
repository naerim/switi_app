import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

const imagePath = require('../../Img/btn_back.png');

interface DisplayProps {
  display: boolean;
}

interface Props {
  title: string;
  count?: number;
  display: boolean;
  onPress?: () => void;
}

const ScrapHeader: React.FC<Props> = ({ title, onPress, display, count }) => {
  return (
    <Wrap style={{ paddingTop: Platform.OS === 'ios' ? 0 : 0 }}>
      <BackButton
        activeOpacity={0.8}
        onPress={onPress}
        display={display}
        disabled={!display}
        hitSlop={{ left: 5, right: 5 }}
      >
        <BackButtonImg source={imagePath} />
      </BackButton>
      <Title>{title}</Title>
      <Number>{count}</Number>
    </Wrap>
  );
};

const Wrap = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 24px;
`;

const BackButton = styled.TouchableOpacity<DisplayProps>`
  position: absolute;
  left: 0;
  opacity: ${(props) => (props.display ? '100' : '0')};
  justify-content: center;
`;

const BackButtonImg = styled.Image`
  width: 18px;
  height: 18px;
`;

const Title = styled.Text`
  font-size: 14px;
  text-align: center;
  align-items: center;
`;

const Number = styled.Text`
  font-size: 14px;
  color: #fa897b;
  text-align: center;
  align-items: center;
`;

export default ScrapHeader;
