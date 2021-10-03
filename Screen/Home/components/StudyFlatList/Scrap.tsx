import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import NotScrapIcon from '../../../../Img/icon_notScrap.png';
import ScrapIcon from '../../../../Img/icon_scrap.png';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../../redux';
import { getScrapListRequest } from '../../../../redux/userReducer';

interface Props {
  scrap?: number;
  id: number;
}

const Scrap: React.FC<Props> = ({ scrap, id }) => {
  const [scrapIcon, setScrapIcon] = useState(NotScrapIcon);
  const { scrapList } = useSelector(({ userReducer }: rootState) => ({
    scrapList: userReducer.scrapList,
  }));

  const confirmScrap = () => {
    // some: 배열 요소 중 하나라도 스크랩된 스터디 아이디에 해당하면 true 반환
    const scrap = scrapList.scrapList.some((item: { id: number }) => {
      return item.id == id;
    });
    scrap ? setScrapIcon(ScrapIcon) : setScrapIcon(NotScrapIcon);
  };

  useEffect(() => {
    confirmScrap();
  }, [id, scrapList]);

  return (
    <Container>
      <Icon source={scrapIcon} />
      <Item>{scrap}</Item>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.Image`
  margin-right: 5px;
  width: 10px;
  height: 10px;
`;

const Item = styled.Text`
  color: #2b2b2b;
  font-size: 10px;
`;

export default Scrap;
