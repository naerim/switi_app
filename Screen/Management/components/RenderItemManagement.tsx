import React from 'react';
import styled from 'styled-components/native';
import { useGoStudyDetail } from '../../../util/navigationHooks';
import { ItemType } from '../../Home/interface';
import RecruitIcon from '../../../Component/Icon/RecruitIcon';
import StudyImage from './StudyImage';
import ManageIcon from '../../../Img/icon_memberManage.png';

const RenderItemManagement: React.FC<ItemType> = ({ item }) => {
  const goStudyDetail = useGoStudyDetail(item.id);

  // 글자수 제한
  const limitTitle = (title: string) =>
    title.length > 17 ? title.substr(0, 17) + '...' : title;

  return (
    <Container activeOpacity={0.8} onPress={goStudyDetail}>
      <StudyImage />
      <Content>
        <IconWrap>
          <RecruitIcon done={!item.flag} />
        </IconWrap>
        <Title>{limitTitle(item.title)}</Title>
      </Content>
      <ManageMember>
        <ButtonImage source={ManageIcon} />
      </ManageMember>
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
  padding: 0 10px;
  justify-content: center;
`;

const IconWrap = styled.View`
  flex: 2;
  margin-top: 5px;
`;

const Title = styled.Text`
  flex: 1;
  font-size: 14px;
  color: #2b2b2b;
  padding-left: 5px;
`;

const ManageMember = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const ButtonImage = styled.Image`
  width: 18px;
  height: 16px;
`;

export default RenderItemManagement;
