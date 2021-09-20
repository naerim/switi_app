import React from 'react';
import { ItemType } from '../../interface';
import styled from 'styled-components/native';
import MemberImage from '../MemberImage';

const RecruitRenderItem: React.FC<ItemType> = ({ item }) => {
  return (
    <Container>
      <MemberImage img={'imgPath'} />
      <Content>
        <Title>스터디원</Title>
        <Desc>naerim1119@gmail.com / {item.contact}</Desc>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  padding-bottom: 16px;
  align-items: center;
`;

const Content = styled.View`
  flex: 3;
  padding: 10px;
  justify-content: center;
`;

const Title = styled.Text`
  font-weight: bold;
  margin-top: 14px;
  font-size: 14px;
  color: #2b2b2b;
`;

const Desc = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  width: 80%;
  margin: 5px 0;
`;

export default RecruitRenderItem;
