import React from 'react';
import { useGoSecondProfile } from '../../util/navigationHooks';
import ProfileContainer from './components/Layout/ProfileContainer';
import Age from './components/Age';
import InterestField from './components/InterestField';
import InterestArea from './components/InterestArea';

const FirstProfile = () => {
  const desc =
    '관심지역과 분야를 설정하면,\n내가 원하는 스터디 모집 알림을 받을 수 있어요!';
  const goSecondProfile = useGoSecondProfile();

  return (
    <ProfileContainer buttonText="다음" desc={desc} onClick={goSecondProfile}>
      <Age />
      <InterestArea />
      <InterestField />
    </ProfileContainer>
  );
};

export default FirstProfile;
