import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import BackIcon from '../../../Img/btn_back_w.png';
import ScrapIcon from '../../../Img/icon_scrap.png';
import NotScrapIcon from '../../../Img/icon_notScrap.png';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { rootState } from '../../../redux';

interface Props {
  onPress: () => void;
  id: number;
}

const ScrapHeader: React.FC<Props> = ({ onPress, id }) => {
  const [icon, setIcon] = useState(NotScrapIcon);
  const { scrapList } = useSelector(({ userReducer }: rootState) => ({
    scrapList: userReducer.scrapList,
  }));

  const confirmScrap = () => {
    // some: 배열 요소 중 하나라도 스크랩된 스터디 아이디에 해당하면 true 반환
    // scrap이 true면 이미 스크랩된 스터디란 의미 !
    const scrap = scrapList.scrapList.some((item: { id: number }) => {
      return item.id == id;
    });
    scrap ? setIcon(ScrapIcon) : setIcon(NotScrapIcon);
  };

  useEffect(() => {
    confirmScrap();
  }, [id]);

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <Wrap
        onPress={onPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Icon source={BackIcon} />
      </Wrap>
      <Wrap
        onPress={() => console.log('scrap')}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <RightIcon source={icon} />
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
