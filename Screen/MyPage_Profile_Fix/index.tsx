import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/ContainerWithBack';
import { useGoMyPageProfile } from '../../util/navigationHooks';
import useInput from '../../util/useInput';
import Age from '../Profile/components/Age';
import FlatListModal from '../Profile/components/FlatListModal';
import MyState from '../Profile/components/MyState';
import Introduce from '../Profile/components/Introduce';
import BasicButton from '../../Component/BasicButton';
import useScroll from '../../util/useScroll';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import axios from 'axios';
import { getMyProfileRequest } from '../../redux/userReducer';

const MyPage_Profile_Fix = () => {
  const { scroll, scrollOn } = useScroll();

  const goMyProfile = useGoMyPageProfile();
  const ageInput = useInput('');
  const desc =
    '나와 더 잘 맞는 스터디원과의 만남을 위해\n' + '프로필을 작성해주세요!';

  const [selectArea, setSelectArea] = useState<number[]>([]);
  const [selectInterest, setSelectInterest] = useState<number[]>([]);
  const introduceInput = useInput('');
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({
    student: false,
    jobSeeker: false,
    worker: false,
  });
  const [state, setState] = useState<number[]>([]);
  const [selectCharacter, setSelectCharacter] = useState<number[]>([]);
  const { interest, region, character } = useSelector(
    ({ dataReducer }: rootState) => ({
      interest: dataReducer.interest,
      region: dataReducer.region,
      character: dataReducer.character,
    })
  );
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const dispatch = useDispatch();
  const onGetMyProfile = useCallback(
    // 나의 프로필 가져오기
    (token) => dispatch(getMyProfileRequest(token)),
    [dispatch]
  );

  const onPress = () => {
    // myInterest, myCharacter 인덱스 1씩 더해줌
    axios({
      method: 'put',
      url: 'http://localhost:4000/user/updateProfile',
      headers: { Authorization: login.token },
      data: {
        age: ageInput.value,
        aboutme: introduceInput.value,
        myRegion: 1, // 지역 수정(gu 오류남)
        myInterest: selectInterest.map((n) => {
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
        goMyProfile();
        onGetMyProfile(login.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <BasicContainer
      headerTitle="프로필 수정"
      display
      onPress={goMyProfile}
      scroll={scroll}
    >
      <Wrap showsVerticalScrollIndicator={false} onScroll={scrollOn}>
        <Explanation>{desc}</Explanation>
        <Age input={ageInput} />
        <FlatListModal
          title="관심지역 (3개 이하 선택)"
          data={region}
          select={selectArea}
          setSelect={setSelectArea}
        />
        <FlatListModal
          title="관심분야 (3개 이하 선택)"
          data={interest}
          select={selectInterest}
          setSelect={setSelectInterest}
        />
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
        <BasicButton
          text="저장하기"
          onPress={onPress}
          disabled={
            !ageInput.value ||
            !selectArea ||
            !selectInterest ||
            !selectCharacter ||
            !introduceInput
          }
        />
      </Wrap>
    </BasicContainer>
  );
};

const Wrap = styled.ScrollView`
  margin-right: 24px;
  margin-left: 24px;
`;

const Explanation = styled.Text`
  font-size: 12px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export default MyPage_Profile_Fix;
