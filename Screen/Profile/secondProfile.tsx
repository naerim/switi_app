import React from 'react';
import { useGoFirstProfile, useGoSignIn } from '../../util/navigationHooks';
import { Text } from 'react-native';
import ProfileContainer from './components/Layout/ProfileContainer';

const SecondProfile = () => {
  const desc =
    '나와 더 잘 맞는 스터디원과의 만남을 위해\n프로필을 작성해주세요!';
  const goLogin = useGoSignIn();
  const goFirstProfile = useGoFirstProfile();

  return (
    <ProfileContainer
      buttonText="프로필 설정 완료"
      desc={desc}
      onClick={goLogin}
      onPress={goFirstProfile}
    >
      <Text>second profile</Text>
    </ProfileContainer>
  );
};

export default SecondProfile;
