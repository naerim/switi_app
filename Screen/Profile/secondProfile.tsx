import React, { useState } from 'react';
import { useGoFirstProfile, useGoSignIn } from '../../util/navigationHooks';
import ProfileContainer from './components/Layout/ProfileContainer';
import MyState from './components/MyState';
import Introduce from './components/Introduce';
import useInput from '../../util/useInput';
import FlatListModal from './components/FlatListModal';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';
import axios from 'axios';
import { HostURL } from '../../redux/url';
import styled from 'styled-components/native';

const SecondProfile = ({ route }: any) => {
  const nickname = route.params.nickname;
  const age = route.params.age;
  const ageFlag = route.params.ageFlag;
  const area = route.params.area;
  const interest = route.params.interest;
  const introduceInput = useInput('');
  const desc =
    '나와 더 잘 맞는 스터디원과의 만남을 위해\n프로필을 작성해주세요!';
  const goLogin = useGoSignIn();
  const goFirstProfile = useGoFirstProfile(nickname);
  // 나의 상황
  const [state, setState] = useState<number[]>([]);
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({
    student: false,
    jobSeeker: false,
    worker: false,
  });
  const [selectCharacter, setSelectCharacter] = useState<number[]>([]);
  const { character } = useSelector(({ dataReducer }: rootState) => ({
    character: dataReducer.character,
  }));

  const setProfile = () => {
    axios({
      method: 'put',
      url: `${HostURL}/user/setProfile`,
      data: {
        nickname: nickname,
        age: ageFlag ? 0 : age,
        age_flag: ageFlag,
        aboutme: introduceInput.value,
        myRegion: area.map((n: number) => {
          n += 1;
          return n;
        }),
        myInterest: interest.map((n: number) => {
          n += 1;
          return n;
        }),
        myCharacter: selectCharacter.map((n) => {
          n += 1;
          return n;
        }),
        myState: state,
      },
    })
      .then(() => {
        goLogin();
      })
      .catch((err) => console.log(err));
  };

  const disabled =
    introduceInput.value === '' ||
    state.length === 0 ||
    selectCharacter.length === 0;

  return (
    <ProfileContainer
      buttonText="프로필 설정 완료"
      desc={desc}
      onClick={setProfile}
      onPress={goFirstProfile}
      disabled={disabled}
      display={true}
    >
      <Container showsVerticalScrollIndicator={false}>
        <MyState
          check={{ checked, setChecked }}
          state={state}
          setState={setState}
        />
        <FlatListModal
          title="나의 성격 (3개 이하 선택)"
          data={character}
          select={selectCharacter}
          setSelect={setSelectCharacter}
          column
        />
        <Introduce input={introduceInput} />
      </Container>
    </ProfileContainer>
  );
};

const Container = styled.ScrollView`
  flex: 1;
`;

export default SecondProfile;
