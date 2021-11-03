import React from 'react';
import styled from 'styled-components/native';
import { ItemType } from '../../../Home/interface';
import {
  useGoManageProceeding,
  useGoStudyDetail,
} from '../../../../util/navigationHooks';
import ManageIcon from '../../../../Img/icon_memberManage.png';
import ApplyIcon from '../../../../Component/Icon/ApplyIcon';

interface VisibleProps {
  visible: number;
}

const Proceeding: React.FC<ItemType> = ({ item }) => {
  const goStudyDetail = useGoStudyDetail(item.id);
  const goManageProceeding = useGoManageProceeding(item.id, item.title);

  // 글자수 제한
  const limitTitle = (title: string) =>
    title.length > 17 ? title.substr(0, 17) + '...' : title;

  return (
    <Container activeOpacity={0.8} onPress={goStudyDetail}>
      <Content>
        <ApplyIcon done={!item.flag} apply={item.Applies[0].apply_state} />
        <Title>{limitTitle(item.title)}</Title>
      </Content>
      <ManageMember onPress={goManageProceeding}>
        <ButtonImage
          source={ManageIcon}
          visible={item.Applies[0].apply_state}
        />
      </ManageMember>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Content = styled.View`
  flex: 3;
  padding: 12px 0;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  margin-top: 1px;
  font-weight: bold;
  color: #2b2b2b;
  justify-content: center;
  align-items: center;
`;

const ManageMember = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const ButtonImage = styled.Image<VisibleProps>`
  width: ${(props) => (props.visible === 1 ? '18px' : 0)};
  height: 16px;
`;

export default Proceeding;
