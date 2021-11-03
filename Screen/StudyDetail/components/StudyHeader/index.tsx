import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import DetailHeader from '../DetailHeader';
import ScrapHeader from '../ScrapHeader';
import { useSelector } from 'react-redux';
import { rootState } from '../../../../redux';

interface Props {
  onPress: () => void;
  id: number;
  setPopupVisible: (v: boolean) => void;
  setPopupText: (v: string) => void;
}

// 모집글인 경우 DetailHeader
// 아닌 경우 ScrapHeader

const StudyHeader: React.FC<Props> = ({
  onPress,
  id,
  setPopupVisible,
  setPopupText,
}) => {
  const [header, setHeader] = useState(
    <ScrapHeader
      onPress={onPress}
      id={id}
      setPopupVisible={setPopupVisible}
      setPopupText={setPopupText}
    />
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
      ? setHeader(<DetailHeader id={id} onPress={onPress} />)
      : setHeader(
          <ScrapHeader
            onPress={onPress}
            id={id}
            setPopupVisible={setPopupVisible}
            setPopupText={setPopupText}
          />
        );
  };

  useEffect(() => {
    checkLeader();
  }, [id, myStudyList]);

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      {header}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default StudyHeader;
