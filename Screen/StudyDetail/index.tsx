import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import StudyInfo from './components/StudyInfo';
import BottomButton from './components/BottomButton';
import OtherInfo from './components/OtherInfo';
import { useGoHome } from '../../util/navigationHooks';
import ApplyModal from './components/ApplyModal';
import CancelModal from './components/CancelModal';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { getStudyDetailRequest } from '../../redux/studyReducer';
import TitleFlag from '../Home/components/StudyFlatList/TitleFlag';
import StudyHeader from './components/StudyHeader';

const StudyDetail = ({ route }: any) => {
  const idx = route.params.idx;

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { studyDetail } = useSelector(({ studyReducer }: rootState) => ({
    studyDetail: studyReducer.studyDetail,
  }));
  const { scrapList } = useSelector(({ userReducer }: rootState) => ({
    scrapList: userReducer.scrapList,
  }));

  const dispatch = useDispatch();
  const onGetStudyDetail = useCallback(
    (token, id) => dispatch(getStudyDetailRequest(token, id)),
    [dispatch]
  );

  useEffect(() => {
    onGetStudyDetail(login.token, idx);
  }, [idx, scrapList]);

  const goHome = useGoHome();
  const [modalVisible, setModalVisible] = useState(false);
  // const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const closeCancelModal = () => setCancelModalVisible(false);

  const onClick = () => {
    //showModal();
    setCancelModalVisible(true);
  };

  // 이미지 불러오기
  const loadImg = (url: string) => {
    return 'http://localhost:4000/images/' + url;
  };

  if (!studyDetail) return null;

  return (
    <Container>
      <StudyHeader
        onPress={goHome}
        img={loadImg(studyDetail.Images[0].imgPath)}
        id={studyDetail.id}
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
      <BottomButton onPress={onClick} />
      <ApplyModal modalVisible={modalVisible} closeModal={closeModal} />
      <CancelModal
        modalVisible={cancelModalVisible}
        closeModal={closeCancelModal}
      />
    </Container>
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
