import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import RecruitIcon from '../../../../Component/Icon/RecruitIcon';
import DetailHeader from '../DetailHeader';
import ScrapHeader from '../ScrapHeader';
import { useSelector } from 'react-redux';
import { rootState } from '../../../../redux';

interface Props {
  img: any;
  done?: boolean;
  onPress: () => void;
  id: number;
}

// 모집글인 경우 DetailHeader
// 아닌 경우 ScrapHeader

const StudyImage: React.FC<Props> = ({ img, done, onPress, id }) => {
  const [header, setHeader] = useState(
    <ScrapHeader onPress={onPress} id={id} />
  );
  const { myStudyList } = useSelector(({ manageReducer }: rootState) => ({
    myStudyList: manageReducer.myStudyList,
  }));

  const checkLeader = () => {
    if (!myStudyList) return null;
    // 나의 모집글인 경우 true를 반환
    const leader = myStudyList.some((item: { id: number }) => {
      return item.id == id;
    });
    // 모집장일 경우 header 다르게
    leader
      ? setHeader(<DetailHeader onPress={onPress} />)
      : setHeader(<ScrapHeader onPress={onPress} id={id} />);
  };

  useEffect(() => {
    checkLeader();
  }, [id, myStudyList]);

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      {header}
      <RecruitIcon done={done} use="StudyDetail" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default StudyImage;
