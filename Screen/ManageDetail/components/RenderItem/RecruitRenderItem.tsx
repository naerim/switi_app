import React from 'react';
import { ItemType } from '../../interface';
import styled from 'styled-components/native';
import MemberImage from '../MemberImage';
import { useGoProfileDetail } from '../../../../util/navigationHooks';

const RecruitRenderItem: React.FC<ItemType> = ({ item }) => {
  const goProfileDetail = useGoProfileDetail(item.id);
  return (
    <Container activeOpacity={0.8} onPress={goProfileDetail}>
      <MemberImage img={'imgPath'} />
      <Content>
        <Title>{item.nickname}</Title>
        <Desc>
          {item.email} / {item.studyMember.contact}
        </Desc>
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
