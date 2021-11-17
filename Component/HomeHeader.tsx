import React from 'react';
import styled from 'styled-components/native';
import Logo from '../Img/logo_switi.png';
import { Platform } from 'react-native';

interface Props {
  onPress?: () => void;
}

const HomeHeader: React.FC<Props> = ({ onPress }) => {
  return (
    <Wrap style={{ paddingTop: Platform.OS === 'ios' ? 3 : 23 }}>
      <Icon source={Logo} />
    </Wrap>
  );
};

// 알람 기능
// <AlarmButton activeOpacity={0.8} onPress={onPress}>
//     <AlarmIcon source={Alarm} />
// </AlarmButton>

const Wrap = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 24px;
  align-items: center;
  height: 46px;
`;

const Icon = styled.Image`
  height: 18px;
  width: 54px;
`;

// 알람 기능
// const AlarmIcon = styled.Image`
//   height: 18px;
//   width: 18px;
// `;
//
// const AlarmButton = styled.TouchableOpacity``;

export default HomeHeader;
