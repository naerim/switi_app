import React from 'react';
import { ItemType } from '../interface';
import styled from 'styled-components/native';
import MemberImage from './MemberImage';
import { useGoProfileDetail } from '../../../util/navigationHooks';
import AcceptButton from './AcceptButton';
import { useSelector } from 'react-redux';
import { rootState } from '../../../redux';

interface DescProps {
  //  desc가 true이면 멤버 설명 보임(이메일, 전화번호 등)
  desc?: boolean;
  leader?: boolean;
}

const RecruitRenderItem: React.FC<ItemType> = ({
  idStudy,
  item,
  desc,
  leader,
  proceeding,
}) => {
  // 모집글일 경우 prev가 0
  const goProfileDetail = useGoProfileDetail(
    item.id,
    idStudy,
    proceeding ? 1 : 0
  );
  const { myStudyList } = useSelector(({ manageReducer }: rootState) => ({
    myStudyList: manageReducer.myStudyList,
  }));
  const { myApplyList } = useSelector(({ manageReducer }: rootState) => ({
    myApplyList: manageReducer.myApplyList,
  }));
  const { myPage } = useSelector(({ userReducer }: rootState) => ({
    myPage: userReducer.myPage,
  }));

  // 스터디 리더 표시 (로그인한 아이디가 모집장이 아닌 경우)
  const checkLeader = () =>
    item.studyMember.leader ? item.nickname + ' (모집장)' : item.nickname;

  // 스터디가 끝났는지 확인
  const checkDone = () => {
    let v = false;
    if (proceeding) {
      // 스터디원일때
      if (item.nickname == myPage.myPage.nickname) return false;
      myApplyList.forEach(({ id, end_flag }) => {
        if (idStudy == id) v = end_flag;
      });
    } else {
      // 모집장일때
      if (item.studyMember.leader) return false;
      myStudyList.forEach(({ id, end_flag }) => {
        if (idStudy == id) v = end_flag;
      });
    }
    return v;
  };

  return (
    <Container activeOpacity={0.8} onPress={goProfileDetail}>
      <MemberImage img={'imgPath'} />
      <Content>
        <Title>{leader ? '나 (모집장)' : checkLeader()}</Title>
        <Desc desc={desc}>
          {item.email} / {item.studyMember.contact}
        </Desc>
      </Content>
      <AcceptButton title="평가하기" display={checkDone()} />
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
