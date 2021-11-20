import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { useGoHome } from '../../util/navigationHooks';
import Header from './components/Header';
import { Platform, ScrollView } from 'react-native';
import SelectOne from './components/SelectOne';
import Target from './components/Target';
import useInput from '../../util/useInput';
import Input from './components/Input';
import LongInput from './components/LongInput';
import EndDate from './components/EndDate';
import RecruitNum from './components/RecruitNum';
import BasicButton from '../../Component/BasicButton';
import EnrollModal from './components/EnrollModal';
import FlagRadioButton from './components/FlagRadioButton';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  offlineStudyListRequest,
  onlineStudyListRequest,
} from '../../redux/studyReducer';
import EnrollDoneModal from './components/EnrollDoneModal';
import { getMyStudyListRequest } from '../../redux/manageReducer';

const AddStudy = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);
  const [target, setTarget] = useState<number[]>([]);
  const periodInput = useInput('');
  const recruitNumInput = useInput('');
  const [recruitSelect, setRecruitSelect] = useState(false);
  const contactInput = useInput('');
  const titleInput = useInput('');
  const contentInput = useInput('');
  const goHome = useGoHome();
  const [EndDateInput, setEndDateInput] = useState<{ [key: string]: string }>({
    year: '',
    month: '',
    day: '',
  });
  const [onlineFlag, setOnlineFlag] = useState(0); //0: 온라인, 1: 오프라인
  const [area, setArea] = useState<number[]>([]);
  const [category, setCategory] = useState<number[]>([]);
  const detailAddressInput = useInput('');
  const [DoneModalVisible, setDoneModalVisible] = useState(false);
  const showDoneModal = () => setDoneModalVisible(true);
  const closeDoneModal = () => setDoneModalVisible(false);

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));

  const { interest, region } = useSelector(({ dataReducer }: rootState) => ({
    interest: dataReducer.interest,
    region: dataReducer.region,
  }));

  const dispatch = useDispatch();
  const fetchOnlineStudyList = (order: boolean, query: string) =>
    dispatch(onlineStudyListRequest(login.token, order, query));
  const fetchOfflineStudyList = (order: boolean, query: string) =>
    dispatch(offlineStudyListRequest(login.token, order, query));
  const onGetMyStudyList = useCallback(
    (token) => dispatch(getMyStudyListRequest(token)),
    [dispatch]
  );

  // 최종 등록 버튼
  const EnrollButton = () => {
    // endDate
    const date =
      EndDateInput.year + '-' + EndDateInput.month + '-' + EndDateInput.day;
    axios({
      method: 'post',
      url: 'http://localhost:4000/study/addStudy',
      headers: { Authorization: login.token },
      data: {
        online_flag: onlineFlag,
        state: target,
        category: category.map((n) => {
          n += 1;
          return n;
        }),
        address: area.map((n) => {
          n += 1;
          return n;
        }),
        recruit_num: recruitNumInput.value,
        detail_address: detailAddressInput.value,
        period: periodInput.value,
        endDate: date,
        contact: contactInput.value,
        title: titleInput.value,
        desc: contentInput.value,
      },
    })
      .then(() => {
        closeModal();
        fetchOnlineStudyList(true, '');
        fetchOfflineStudyList(true, '');
        onGetMyStudyList(login.token);
        setTimeout(() => {
          showDoneModal();
        }, 500);
        setTimeout(() => {
          closeDoneModal();
          goHome();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  const onClick = () => {
    setModalVisible(true);
  };

  const disabled =
    target.length === 0 ||
    category.length === 0 ||
    (onlineFlag === 1 && area.length === 0) ||
    recruitNumInput.value === '' ||
    (onlineFlag === 1 && detailAddressInput.value === '') ||
    periodInput.value === '' ||
    EndDateInput.year === '' ||
    contactInput.value === '' ||
    titleInput.value === '' ||
    contentInput.value === '';

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <Header title="모집글 작성" onPress={goHome} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Content>
          <FlagRadioButton
            title="스터디 형식"
            input={{ onlineFlag, setOnlineFlag }}
          />
          <SelectOne
            title="카테고리"
            data={interest}
            input={category}
            setInput={setCategory}
          />
          {onlineFlag === 1 && (
            <SelectOne
              title="지역"
              data={region}
              input={area}
              setInput={setArea}
            />
          )}
          <Target target={target} setTarget={setTarget} />
          <RecruitNum
            input={recruitNumInput}
            select={{ recruitSelect, setRecruitSelect }}
          />
          <Input
            title="모임장소"
            input={detailAddressInput}
            placeholder="모입장소를 입력해주세요"
            onlineFlag={onlineFlag}
          />
          <Input
            title="활동기간"
            input={periodInput}
            placeholder="활동기간을 입력해주세요"
          />
          <EndDate value={{ EndDateInput, setEndDateInput }} />
          <Input
            title="문의"
            input={contactInput}
            placeholder="오픈채팅 링크, 전화번호 등 문의처를 입력해주세요"
          />
          <Input
            title="제목"
            input={titleInput}
            placeholder="스터디 제목을 입력해주세요"
          />
          <LongInput input={contentInput} />
          <BasicButton text="등록하기" onPress={onClick} disabled={disabled} />
        </Content>
      </ScrollView>
      <EnrollModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        onPress={EnrollButton}
      />
      <EnrollDoneModal
        closeModal={closeDoneModal}
        modalVisible={DoneModalVisible}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: white;
`;

const Content = styled.ScrollView`
  background-color: white;
  padding: 20px 24px;
  margin-bottom: 25px;
`;

export default AddStudy;
