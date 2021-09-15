import React, { useState } from 'react';
import { useGoFirstProfile, useGoSignIn } from '../../util/navigationHooks';
import ProfileContainer from './components/Layout/ProfileContainer';
import MyState from './components/MyState';
import Introduce from './components/Introduce';
import useInput from '../../util/useInput';
import FlatListModal from './components/FlatListModal';
import { CharacterList } from '../../Data';

const SecondProfile = () => {
  const introduceInput = useInput('');
  const desc =
    '나와 더 잘 맞는 스터디원과의 만남을 위해\n프로필을 작성해주세요!';
  const goLogin = useGoSignIn();
  const goFirstProfile = useGoFirstProfile();
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({
    student: false,
    jobSeeker: false,
    worker: false,
  });

  const [selectCharacter, setSelectCharacter] = useState<number[]>([]);

  return (
    <ProfileContainer
      buttonText="프로필 설정 완료"
      desc={desc}
      onClick={goLogin}
      onPress={goFirstProfile}
      display={true}
    >
      <MyState check={{ checked, setChecked }} />
      <FlatListModal
        title="나의 성격 (3개 이하 선택)"
        data={CharacterList}
        select={selectCharacter}
        setSelect={setSelectCharacter}
        column
      />
      <Introduce input={introduceInput} />
    </ProfileContainer>
  );
};

export default SecondProfile;
