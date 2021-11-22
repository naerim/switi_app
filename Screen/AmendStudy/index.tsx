import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { useGoBack } from '../../util/navigationHooks';
import useInput from '../../util/useInput';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  getStudyDetailRequest,
  offlineStudyListRequest,
  onlineStudyListRequest,
} from '../../redux/studyReducer';
import { getMyStudyListRequest } from '../../redux/manageReducer';
import { Platform, ScrollView } from 'react-native';
import Header from '../AddStudy/components/Header';
import FlagRadioButton from '../AddStudy/components/FlagRadioButton';
import SelectOne from '../AddStudy/components/SelectOne';
import Target from '../AddStudy/components/Target';
import RecruitNum from '../AddStudy/components/RecruitNum';
import BasicButton from '../../Component/BasicButton';
import LongInput from '../AddStudy/components/LongInput';
import {
  checkRecruitNum,
  studyCategory,
  studyEndDate,
  studyRegion,
  studyTarget,
} from './DataFunc';
import AmendModal from './AmendModal';
import axios from 'axios';
import { searchHistoryRequest } from '../../redux/search/searchReducer';
import { HostURL } from '../../redux/url';
import AmendInput from './AmendInput';

const AmendStudy = () => {
  const { studyDetail } = useSelector(({ studyReducer }: rootState) => ({
    studyDetail: studyReducer.studyDetail,
  }));

  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);
  const goBack = useGoBack();
  // 원래 스터디 정보로 초기화
  const [target, setTarget] = useState<number[]>(
    studyTarget(studyDetail.States)
  );
  const periodInput = useInput(studyDetail.period);
  const recruitNumInput = useInput(studyDetail.recruit_num.toString());
  const [recruitSelect, setRecruitSelect] = useState(
    checkRecruitNum(studyDetail.recruit_num)
  );
  const contactInput = useInput(studyDetail.contact);
  const titleInput = useInput(studyDetail.title);
  const contentInput = useInput(studyDetail.desc);
  const [onlineFlag, setOnlineFlag] = useState(studyDetail.online_flag ? 1 : 0);
  const [area, setArea] = useState<number[]>(studyRegion(studyDetail.Regions));
  const [category, setCategory] = useState<number[]>(
    studyCategory(studyDetail.Interests)
  );
  const detailAddressInput = useInput(studyDetail.detail_address);

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));

  const { interest, region } = useSelector(
    ({ dataReducer }: rootState) => ({
      interest: dataReducer.interest,
      region: dataReducer.region,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const fetchOnlineStudyList = (order: boolean, query: string) =>
    dispatch(onlineStudyListRequest(login.token, order, query));
  const fetchOfflineStudyList = (order: boolean, query: string) =>
    dispatch(offlineStudyListRequest(login.token, order, query));
  const onGetStudyDetail = useCallback(
    (token, id) => dispatch(getStudyDetailRequest(token, id)),
    [dispatch]
  );
  const onGetMyStudyList = useCallback(
    (token) => dispatch(getMyStudyListRequest(token)),
    [dispatch]
  );

  // 최종 수정 버튼
  const AmendButton = () => {
    setModalVisible(true);
    axios({
      method: 'put',
      url: `${HostURL}/study/updateStudy/${studyDetail.id}`,
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
        endDate: studyDetail.endDate,
        contact: contactInput.value,
        title: titleInput.value,
        desc: contentInput.value,
      },
      headers: { Authorization: login.token },
    })
      .then((res) => {
        onGetMyStudyList(login.token);
        onGetStudyDetail(login.token, studyDetail.id);
        fetchOnlineStudyList(true, '');
        fetchOfflineStudyList(true, '');
        setTimeout(() => {
          closeModal();
          goBack();
        }, 300);
        setTimeout(() => {
          dispatch(searchHistoryRequest(login.token));
        }, 500);
      })
      .catch((err) => {
        alert('수정 실패');
      });
  };

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <Header title="모집글 수정" onPress={goBack} />
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
          <AmendInput
            title="모임장소"
            input={detailAddressInput}
            placeholder="모입장소를 입력해주세요"
            onlineFlag={onlineFlag}
          />
          <AmendInput
            title="활동기간"
            input={periodInput}
            placeholder="활동기간을 입력해주세요"
          />
          <Title>예정 종료일</Title>
          <SubTitle>{studyEndDate(studyDetail.endDate)}</SubTitle>
          <AmendInput
            title="문의"
            input={contactInput}
            placeholder="오픈채팅 링크, 전화번호 등 문의처를 입력해주세요"
          />
          <AmendInput
            title="제목"
            input={titleInput}
            placeholder="스터디 제목을 입력해주세요"
          />
          <LongInput input={contentInput} />
          <BasicButton text="수정하기" onPress={AmendButton} disabled={false} />
        </Content>
      </ScrollView>
      <AmendModal closeModal={closeModal} modalVisible={modalVisible} />
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

const Title = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
  margin-bottom: 2%;
`;

const SubTitle = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export default AmendStudy;
