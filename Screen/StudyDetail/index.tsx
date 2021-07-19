import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import StudyInfo from './components/StudyInfo';
import BottomButton from './components/BottomButton';
import OtherInfo from './components/OtherInfo';
import StudyImage from './components/StudyImage';
import { useGoHome } from '../../util/navigationHooks';
import ApplyModal from './components/ApplyModal';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { DataType } from '../Home/interface';

const StudyDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const [content, setContent] = useState([]);
  const { onlineStudyList, offlineStudyList } = useSelector(
    (state: rootState) => state.studyReducer
  );

  useEffect(() => {
    setContent(onlineStudyList.concat(offlineStudyList));
  }, []);

  // @ts-ignore
  const item: DataType = content.find((i) => i.id === idx);

  const goHome = useGoHome();
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <Container>
      <StudyImage done={item && item.flag === 0} onPress={goHome} />
      <Content>
        <Title>{item && item.title}</Title>
        <OtherInfo
          username={item && item.username}
          createAt={item && item.createdAt.toString().split('T')[0]}
          scrap={item && item.scrapCount}
        />
        <Desc>{item && item.desc}</Desc>
      </Content>
      <StudyInfo item={item} />
      <BottomButton onPress={showModal} />
      <ApplyModal modalVisible={modalVisible} closeModal={closeModal} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;

const Title = styled.Text`
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.View`
  padding: 0 24px;
  margin-bottom: 20px;
  flex: 4;
  border-bottom-width: 1px;
  border-color: #f3f3f3;
`;

const Desc = styled.Text`
  font-size: 12px;
  color: #2b2b2b;
  flex: 6;
`;

export default StudyDetail;
