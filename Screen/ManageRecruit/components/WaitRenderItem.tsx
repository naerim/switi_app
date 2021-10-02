import React from 'react';
import { ItemType } from '../../ManageProceeding/interface';
import styled from 'styled-components/native';
import MemberImage from '../../ManageProceeding/components/MemberImage';
import AcceptButton from '../../ManageProceeding/components/AcceptButton';

const WaitRenderItem: React.FC<ItemType> = ({ item }) => {
  const limitTitle = (title: string) =>
    title.length > 17 ? title.substr(0, 17) + '...' : title;
  return (
    <Container activeOpacity={0.8}>
      <MemberImage img={'imgPath'} />
      <Content>
        <Title>{item.User.nickname}</Title>
        <Desc>{limitTitle(item.apply_detail)}</Desc>
      </Content>
      <AcceptButton title="처리하기" display={true} />
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

export default WaitRenderItem;
