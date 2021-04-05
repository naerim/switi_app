import React from 'react';
import styled from 'styled-components/native';
import Logo from '../Img/logo_home.png';
import AlarmIcon from '../Img/icon_alarm.png';

interface Props {
  onPress?: () => void;
}

const HomeHeader: React.FC<Props> = ({ onPress }) => {
  return (
    <Wrap>
      <Icon source={Logo} />
      <AlarmButton activeOpacity={0.8} onPress={onPress}>
        <Icon source={AlarmIcon} />
      </AlarmButton>
    </Wrap>
  );
};

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
`;

const AlarmButton = styled.TouchableOpacity``;

export default HomeHeader;
