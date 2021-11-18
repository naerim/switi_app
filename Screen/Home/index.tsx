import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import StudyFlatList from './components/StudyFlatList';
import TopCategory from './components/TopCategory';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { getMyPageRequest, getScrapListRequest } from '../../redux/userReducer';
import {
  getMyApplyListRequest,
  getMyStudyListRequest,
} from '../../redux/manageReducer';
import StudyDoneModal from './components/StudyDoneModal';
import moment from 'moment';
import { CheckProps } from './interface';

const Home = ({ route }: any) => {
  const [tagList, setTagList] = useState<
    { id: number; name: string; category: string }[]
  >([]);
  // 0 : 온라인, 1 : 오프라인
  const idx = route.params.idx;

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));

  const dispatch = useDispatch();
  const onGetScrapList = useCallback(
    // 스크랩리스트 불러오기
    (token) => dispatch(getScrapListRequest(token)),
    [dispatch]
  );
  const onGetMyStudyList = useCallback(
    (token) => dispatch(getMyStudyListRequest(token)),
    [dispatch]
  );
  const onGetMyApplyList = useCallback(
    // 스터디 신청 리스트 가져오기
    (token) => dispatch(getMyApplyListRequest(token)),
    [dispatch]
  );
  const onGetMyPage = useCallback(
    // 사용자 닉네임, 당도, 프로필사진, 스크랩 수 불러오기
    (token) => dispatch(getMyPageRequest(token)),
    [dispatch]
  );

  useEffect(() => {
    onGetScrapList(login.token);
    onGetMyStudyList(login.token);
    onGetMyApplyList(login.token);
    onGetMyPage(login.token);
  }, [dispatch]);

  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);
  const [idStudy, setIdStudy] = useState(-1);
  const [doneTitle, setDoneTitle] = useState(' ');
  const { myStudyList } = useSelector(({ manageReducer }: rootState) => ({
    myStudyList: manageReducer.myStudyList,
  }));

  // 기간이 종료된 스터디가 있는지 확인하는 함수
  const checkDoneDate = async () => {
    const now = new Date();
    const date = moment(now).format('YYYY-MM-DD');
    await myStudyList.forEach(
      ({ id, endDate, title, end_flag }: CheckProps) => {
        if (!end_flag && date == endDate.substring(0, 10)) {
          setIdStudy(id);
          setDoneTitle(title);
        }
      }
    );
    idStudy > 0 && setModalVisible(true);
  };

  useEffect(() => {
    myStudyList && checkDoneDate();
  }, [myStudyList]);

  return (
    <Container>
      <TopCategory tagList={tagList} setTagList={setTagList} />
      <StudyFlatList idx={idx} tagList={tagList} />
      <StudyDoneModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        idStudy={idStudy}
        title={doneTitle}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export default Home;
