import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useGoHome } from '../../util/navigationHooks';
import Header from './components/Header';
import { Platform, ScrollView } from 'react-native';
import AddImage from './components/AddImage';
import Category from './components/Category';
import Target from './components/Target';
import useInput from '../../util/useInput';
import Input from './components/Input';
import LongInput from './components/LongInput';
import EndDate from './components/EndDate';
import RecruitNum from './components/RecruitNum';
import BasicButton from '../../Component/BasicButton';
import Area from './components/Area';

const AddStudy = () => {
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

  const EnrollButton = () => {
    goHome();
  };

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <Header onPress={goHome} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <AddImage />
        <Content>
          <Category />
          <Area />
          <Target select={selectTarget} />
          <RecruitNum
            input={recruitNumInput}
            select={{ recruitSelect, setRecruitSelect }}
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
          <BasicButton text="등록하기" onPress={EnrollButton} />
        </Content>
      </ScrollView>
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
