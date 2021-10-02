import React from 'react';
import { ItemType } from '../interface';
import styled from 'styled-components/native';
import MemberImage from './MemberImage';
import { useGoProfileDetail } from '../../../util/navigationHooks';
import AcceptButton from './AcceptButton';

interface DescProps {
  //  desc가 true이면 멤버 설명 보임(이메일, 전화번호 등)
  desc?: boolean;
}

const RecruitRenderItem: React.FC<ItemType> = ({ item, desc }) => {
  const goProfileDetail = useGoProfileDetail(item.id);
  return (
    <Container activeOpacity={0.8} onPress={goProfileDetail}>
      <MemberImage img={'imgPath'} />
      <Content>
        <Title>{item.nickname}</Title>
        <Desc desc={desc}>
          {item.email} / {item.studyMember.contact}
        </Desc>
      </Content>
      <AcceptButton title="평가하기" display={false} />
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

const Desc = styled.Text<DescProps>`
  font-size: 12px;
  color: #b4b4b4;
  margin: 5px 0;
  height: ${(props) => (props.desc ? 'auto' : '0px')};
`;

export default RecruitRenderItem;
