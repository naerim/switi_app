import React from 'react';
import styled from 'styled-components/native';
import { ItemType } from '../interface';
import StudyImage from './StudyImage';
import Category from './Category';
import Scrap from './Scrap';

const RenderItem: React.FC<ItemType> = ({ item, onPress }) => {
  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <StudyImage online={item.online_flag} />
      <Content>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Bottom>
          <Category
            address={item.address}
            category={item.category}
            target={item.target}
          />
          <Scrap scrap={item.scrap} />
        </Bottom>
      </Content>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px 0;
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
  height: 30px;
  width: 80%;
  margin: 5px 0;
`;

const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default RenderItem;
