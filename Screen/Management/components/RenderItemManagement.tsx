import React from 'react';
import styled from 'styled-components/native';
import { useGoStudyDetail } from '../../../util/navigationHooks';
import { ItemType } from '../../Home/interface';
import RecruitIcon from '../../../Component/Icon/RecruitIcon';

const RenderItemManagement: React.FC<ItemType> = ({ item }) => {
  const goStudyDetail = useGoStudyDetail(item.id);

  // 글자수 제한
  const limitTitle = (title: string) =>
    title.length > 17 ? title.substr(0, 17) + '...' : title;

  return (
    <Container activeOpacity={0.8} onPress={goStudyDetail}>
      <RecruitIcon done={!item.flag} />
      <Content>
        <Title>{limitTitle(item.title)}</Title>
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

export default RenderItemManagement;
