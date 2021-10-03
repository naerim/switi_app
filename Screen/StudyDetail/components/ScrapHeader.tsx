import React from 'react';
import styled from 'styled-components/native';
import BackIcon from '../../../Img/btn_back_w.png';
// import ScrapIcon from '../../../Img/icon_scrap.png';
import NotScrapIcon from '../../../Img/icon_notScrap.png';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { rootState } from '../../../redux';

interface Props {
  onPress: () => void;
  id: number;
}

const ScrapHeader: React.FC<Props> = ({ onPress, id }) => {
  const { scrapList } = useSelector(({ userReducer }: rootState) => ({
    scrapList: userReducer.scrapList,
  }));

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      {console.log(scrapList)}
      <Wrap
        onPress={onPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Icon source={BackIcon} />
      </Wrap>
      <Wrap
        onPress={() => console.log(id)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <RightIcon source={NotScrapIcon} />
      </Wrap>
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  left: 24px;
  right: 24px;
  top: 24px;
`;

const Wrap = styled.TouchableOpacity``;

const Icon = styled.Image`
  width: 18px;
  height: 18px;
`;

const RightIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export default ScrapHeader;
