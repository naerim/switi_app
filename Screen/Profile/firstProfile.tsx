import React, { useState } from 'react';
import { useGoSecondProfile, useGoSignIn } from '../../util/navigationHooks';
import ProfileContainer from './components/Layout/ProfileContainer';
import Age from './components/Age';
import useInput from '../../util/useInput';
import FlatListModal from './components/FlatListModal';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';

const FirstProfile = ({ route }: any) => {
  const nickname = route.params.nickname;
  const ageInput = useInput('');
  const [ageFlag, setAgeFlag] = useState(false);
  const desc =
    '관심지역과 분야를 설정하면,\n내가 원하는 스터디 모집 알림을 받을 수 있어요!';
  const goSignIn = useGoSignIn();

  const [selectArea, setSelectArea] = useState<number[]>([]);
  const [selectInterest, setSelectInterest] = useState<number[]>([]);
  // params로 데이터 넘김
  const goSecondProfile = useGoSecondProfile(
    nickname,
    ageFlag,
    ageInput.value,
    selectArea,
    selectInterest
  );

  // 다음 버튼
  const clickNextButton = async () => {
    goSecondProfile();
  };

  const { interest, region } = useSelector(({ dataReducer }: rootState) => ({
    interest: dataReducer.interest,
    region: dataReducer.region,
  }));

  const disabled =
    (!ageFlag && ageInput.value === '') ||
    selectArea.length === 0 ||
    selectInterest.length === 0;

  return (
    <ProfileContainer
      buttonText="다음"
      desc={desc}
      onClick={clickNextButton}
      onPress={goSignIn}
      disabled={disabled}
      display={false}
    >
      <Age input={ageInput} ageFlag={ageFlag} setAgeFlag={setAgeFlag} />
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
    </ProfileContainer>
  );
};

export default FirstProfile;
