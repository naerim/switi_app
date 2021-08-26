import React from 'react';
import styled from 'styled-components/native';
import { ItemType } from '../../interface';
import StudyImage from './StudyImage';
import Category from './Category';
import Scrap from './Scrap';
import { useGoStudyDetail } from '../../../../util/navigationHooks';

const RenderItem: React.FC<ItemType> = ({ item }) => {
  const goStudyDetail = useGoStudyDetail(item.id);

  // 글자수 제한
  const limitTitle = (title: string) =>
    title.length > 17 ? title.substr(0, 17) + '...' : title;
  const limitDesc = (desc: string) =>
    desc.length > 40 ? desc.substr(0, 40) + '...' : desc;

  return (
    <Container activeOpacity={0.8} onPress={goStudyDetail}>
      <StudyImage done={item.flag} />
      <Content>
        <Title>{limitTitle(item.title)}</Title>
        <Desc>{limitDesc(item.desc)}</Desc>
        <Bottom>
          <Category
            address={item.Gus}
            category={item.Interests}
            target={item.States}
          />
          <Scrap scrap={item.scrapCount} />
        </Bottom>
      </Content>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding-bottom: 16px;
  align-items: center;
`;

const Content = styled.View`
  flex: 3;
  padding: 10px;
`;

const Title = styled.Text`
  font-size: 14px;
  color: #2b2b2b;
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
