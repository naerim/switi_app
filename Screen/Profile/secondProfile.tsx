import React, { useState } from 'react';
import { useGoFirstProfile, useGoSignIn } from '../../util/navigationHooks';
import ProfileContainer from './components/Layout/ProfileContainer';
import MyState from './components/MyState';
import Character from './components/Character';
import Introduce from './components/Introduce';

const SecondProfile = () => {
  const desc =
    '나와 더 잘 맞는 스터디원과의 만남을 위해\n프로필을 작성해주세요!';
  const goLogin = useGoSignIn();
  const goFirstProfile = useGoFirstProfile();
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({
    student: false,
    jobSeeker: false,
    worker: false,
  });

  return (
    <ProfileContainer
      buttonText="프로필 설정 완료"
      desc={desc}
      onClick={goLogin}
      onPress={goFirstProfile}
    >
      <MyState check={{ checked, setChecked }} />
      <Character />
      <Introduce />
    </ProfileContainer>
  );
};

export default SecondProfile;
