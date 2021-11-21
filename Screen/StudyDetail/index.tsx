import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import StudyInfo from './components/StudyInfo';
import BottomButton from './components/BottomButton';
import OtherInfo from './components/OtherInfo';
import { useGoHome } from '../../util/navigationHooks';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { getStudyDetailRequest } from '../../redux/studyReducer';
import TitleFlag from '../Home/components/StudyFlatList/TitleFlag';
import StudyHeader from './components/StudyHeader';
import BlackModal from '../../Component/BlackModal';
import Splash from '../Splash';

const StudyDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { studyDetail } = useSelector(({ studyReducer }: rootState) => ({
    studyDetail: studyReducer.studyDetail,
  }));
  const { scrapList } = useSelector(({ userReducer }: rootState) => ({
    scrapList: userReducer.scrapList,
  }));
  const { myStudyList } = useSelector(({ manageReducer }: rootState) => ({
    myStudyList: manageReducer.myStudyList,
  }));
  const { myApplyList } = useSelector(({ manageReducer }: rootState) => ({
    myApplyList: manageReducer.myApplyList,
  }));

  const dispatch = useDispatch();
  const onGetStudyDetail = useCallback(
    (token, id) => dispatch(getStudyDetailRequest(token, id)),
    [dispatch]
  );

  useEffect(() => {
    setLoading(true);
    onGetStudyDetail(login.token, idx);
    setLoading(false);
  }, [idx, scrapList]);

  const goHome = useGoHome();

  // 리더인지 확인하는 함수
  const checkLeader = () => {
    // 나의 모집글인 경우 true를 반환
    const leader = myStudyList.some((item: { id: number }) => {
      return item.id == studyDetail.id;
    });
    return leader;
  };

  // 신청여부 확인하는 함수
  const checkApply = () => {
    if (checkLeader()) return '모집 마감하기';
    // 신청했을 경우 true 아니면 false
    const apply = myApplyList.some((item: { id: number }) => {
      return item.id == studyDetail.id;
    });
    // 스터디 멤버인지 확인 (0이면 신청 취소, 1이면 탈퇴하기)
    // apply state = 2이면 신청이 거절된 경우 (버튼 텍스트는 신청 취소로 표시)
    const isMember = myApplyList.some((item: { id: number; Applies: any }) => {
      return item.id == studyDetail.id && item.Applies[0].apply_state == 1;
    });
    const text = isMember ? '탈퇴하기' : '신청 취소하기';
    return apply ? text : '신청하기';
  };

  useEffect(() => {
    setLoading(true);
    studyDetail && checkApply();
    setLoading(false);
  }, [myApplyList]);

  if (!studyDetail) return null;
  if (studyDetail.User == null) return null;

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <Container>
          <StudyHeader
            onPress={goHome}
            id={studyDetail.id}
            setPopupVisible={setPopupVisible}
            setPopupText={setPopupText}
          />
          <Content>
            <TitleFlag
              title={studyDetail.title}
              done={studyDetail.flag}
              detail={true}
            />
            <OtherInfo
              idUser={studyDetail.idUser}
              username={studyDetail.User.nickname}
              createAt={studyDetail.createdAt.toString().split('T')[0]}
              scrap={studyDetail.scrapCount}
              id={studyDetail.id}
            />
            <Desc>{studyDetail.desc}</Desc>
          </Content>
          <StudyInfo item={studyDetail} />
          <BottomButton
            id={studyDetail.id}
            btnText={checkApply()}
            token={login.token}
            setPopupVisible={setPopupVisible}
            setPopupText={setPopupText}
            flag={studyDetail.flag}
            setDone={setDone}
          />
          <BlackModal visible={popupVisible} text={popupText} done={done} />
        </Container>
      )}
    </>
  );
};

const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;
//font-family: 'NotoSans-Bold';

const Content = styled.View`
  padding: 0 24px;
  margin-bottom: 20px;
  flex: 4;
  border-bottom-width: 1px;
  border-color: #f3f3f3;
`;

const Desc = styled.Text`
  font-size: 12px;
  color: #2b2b2b;
  flex: 6;
`;

export default StudyDetail;
