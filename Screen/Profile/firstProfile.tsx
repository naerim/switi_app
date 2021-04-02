import React, { useState } from 'react';
import { useGoSecondProfile, useGoSignIn } from '../../util/navigationHooks';
import ProfileContainer from './components/Layout/ProfileContainer';
import Age from './components/Age';
import useInput from '../../util/useInput';
import FlatListModal from './components/FlatListModal';
import { Area, InterestList } from '../../Data';

const FirstProfile = () => {
  const ageInput = useInput('');
  const desc =
    '관심지역과 분야를 설정하면,\n내가 원하는 스터디 모집 알림을 받을 수 있어요!';
  const goSecondProfile = useGoSecondProfile();
  const goSignIn = useGoSignIn();

  const [selectArea, setSelectArea] = useState<number[]>([]);
  const [selectInterest, setSelectInterest] = useState<number[]>([]);

  // 다음 버튼
  const clickNextButton = () => {
    console.log(ageInput.value);
    console.log(selectArea);
    console.log(selectInterest);
    goSecondProfile();
  };

  return (
    <ProfileContainer
      buttonText="다음"
      desc={desc}
      onClick={clickNextButton}
      onPress={goSignIn}
    >
      <Age input={ageInput} />
      <FlatListModal
        title="관심지역 (3개 이하 선택)"
        data={Area}
        select={selectArea}
        setSelect={setSelectArea}
      />
      <FlatListModal
        title="관심분야 (3개 이하 선택)"
        data={InterestList}
        select={selectInterest}
        setSelect={setSelectInterest}
      />
    </ProfileContainer>
  );
};

export default FirstProfile;
