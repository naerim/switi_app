import React from 'react';
import styled from 'styled-components/native';
import { ItemType } from '../../../Home/interface';
import {
  useGoManageDetail,
  useGoStudyDetail,
} from '../../../../util/navigationHooks';
import StudyImageManage from '../StudyImageManage';
import ManageIcon from '../../../../Img/icon_memberManage.png';

const Recruitment: React.FC<ItemType> = ({ item }) => {
  const goStudyDetail = useGoStudyDetail(item.id);
  const goManageDetail = useGoManageDetail(item.id);

  // 글자수 제한
  const limitTitle = (title: string) =>
    title.length > 17 ? title.substr(0, 17) + '...' : title;

  return (
    <Container activeOpacity={0.8} onPress={goStudyDetail}>
      <StudyImageManage img={item.Images[0].imgPath} />
      <Title>{limitTitle(item.title)}</Title>
      <ManageMember onPress={goManageDetail}>
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

const Title = styled.Text`
  flex: 1;
  font-size: 14px;
  color: #2b2b2b;
  padding-left: 15px;
`;

const ManageMember = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const ButtonImage = styled.Image`
  width: 18px;
  height: 16px;
`;

export default Recruitment;
