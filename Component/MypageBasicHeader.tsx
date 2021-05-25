import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

//설명 : 제가 만든 screen의 header입니다!

const imagePath = require('../Img/btn_back.png');

interface DisplayProps {
  display: boolean;
}

interface Props {
  title: string;
  display: boolean;
  onPress?: () => void;
}

const BasicHeader: React.FC<Props> = ({ title, onPress, display }) => {
  return (
    <Wrap style={{ paddingTop: Platform.OS === 'ios' ? 0 : 0 }}>
      {/*container 에서 위 조건을 주어야 글씨가 안밀려서 이렇게 만들었습니다. */}
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

export default BasicHeader;
