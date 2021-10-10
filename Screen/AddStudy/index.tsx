import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useGoHome } from '../../util/navigationHooks';
import Header from './components/Header';
import { Platform, ScrollView } from 'react-native';
import AddImage from './components/AddImage';
import SelectOne from './components/SelectOne';
import Target from './components/Target';
import useInput from '../../util/useInput';
import Input from './components/Input';
import LongInput from './components/LongInput';
import EndDate from './components/EndDate';
import RecruitNum from './components/RecruitNum';
import BasicButton from '../../Component/BasicButton';
import { InterestList, Area } from '../../Data';
import EnrollModal from './components/EnrollModal';
import FlagRadioButton from './components/FlagRadioButton';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';

const AddStudy = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);
  const selectTarget = useInput('');
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
  const [image, setImage] = useState('');
  const [onlineFlag, setOnlineFlag] = useState(0); //0: 온라인, 1: 오프라인
  const [area, setArea] = useState<number[]>([]);
  const [category, setCategory] = useState<number[]>([]);
  const detailAddressInput = useInput('');

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));

  // 최종 등록 버튼
  const EnrollButton = () => {
    // const formData = new FormData();

    // formData.append('image', file);
    // console.log(file);

    // endDate
    const date =
      EndDateInput.year + '-' + EndDateInput.month + '-' + EndDateInput.day;
    console.log(image);

    console.log(selectTarget.value);
    axios({
      method: 'post',
      url: 'http://localhost:4000/study/addStudy',
      headers: { Authorization: login.token },
      data: {
        online_flag: onlineFlag,
        state: 1,
        category: 1,
        address: 1,
        recruit_num: recruitNumInput.value,
        detail_address: detailAddressInput.value,
        period: periodInput.value,
        endDate: date,
        contact: contentInput.value,
        title: titleInput.value,
        desc: contentInput.value,
        img: image,
      },
    })
      .then(() => {
        goHome();
      })
      .catch((err) => console.log(err));
  };

  const onClick = () => {
    setModalVisible(true);
  };

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <Header onPress={goHome} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/*<AddImage image={image} setImage={setImage} />*/}
        <Content>
          <FlagRadioButton
            title="스터디 형식"
            input={{ onlineFlag, setOnlineFlag }}
          />
          <SelectOne
            title="카테고리"
            data={InterestList}
            input={category}
            setInput={setCategory}
          />
          <SelectOne title="지역" data={Area} input={area} setInput={setArea} />
          <Target select={selectTarget} />
          <RecruitNum
            input={recruitNumInput}
            select={{ recruitSelect, setRecruitSelect }}
          />
          <Input
            title="모임장소"
            input={detailAddressInput}
            placeholder="모입장소를 입력해주세요"
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
          <BasicButton text="등록하기" onPress={onClick} />
        </Content>
      </ScrollView>
      <EnrollModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        onPress={EnrollButton}
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
