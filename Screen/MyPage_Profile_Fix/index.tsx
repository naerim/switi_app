import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/ContainerWithBack';
import { useGoMyPageProfile } from '../../util/navigationHooks';
import useInput from '../../util/useInput';
import Age from '../Profile/components/Age';
import FlatListModal from '../Profile/components/FlatListModal';
import { Area, CharacterList, InterestList } from '../../Data';
import MyState from '../Profile/components/MyState';
import Introduce from '../Profile/components/Introduce';
import BasicButton from '../../Component/BasicButton';
import useScroll from '../../util/useScroll';

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

  const [selectCharacter, setSelectCharacter] = useState<number[]>([]);
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
        <MyState check={{ checked, setChecked }} />
        <FlatListModal
          title="나의 성격 (3개 이하 선택)"
          data={CharacterList}
          select={selectCharacter}
          setSelect={setSelectCharacter}
          column
        />
        <Introduce input={introduceInput} />
        <BasicButton text="저장하기" onPress={goMyProfile} />
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
