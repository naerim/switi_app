import React from 'react';
import styled from 'styled-components/native';
import { ItemType } from '../../interface';
import Category from './Category';
import Scrap from './Scrap';
import { useGoStudyDetail } from '../../../../util/navigationHooks';
import TitleFlag from './TitleFlag';

const RenderItem: React.FC<ItemType> = ({ index, item }) => {
  const goStudyDetail = useGoStudyDetail(index);

  // 글자수 제한
  const limitTitle = (title: string) =>
    title.length > 20 ? title.substr(0, 20) + '...' : title;
  const limitDesc = (desc: string) =>
    desc.length > 50 ? desc.substr(0, 50) + '...' : desc;

  return (
    <Container activeOpacity={0.8} onPress={goStudyDetail}>
      <Content>
        <TitleFlag title={limitTitle(item.title)} done={item.flag} />
        <Desc>{limitDesc(item.desc)}</Desc>
        <Bottom>
          {console.log(item)}
          <Category
            address={item.Regions}
            category={item.Interests}
            target={item.States}
          />
          <Scrap scrap={item.scrapCount} id={item.id} />
        </Bottom>
      </Content>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 5px 0;
  align-items: center;
`;

const Content = styled.View`
  flex: 3;
  padding: 12px 0;
`;

const Desc = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  width: 80%;
  margin: 5px 0;
`;

const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default RenderItem;
