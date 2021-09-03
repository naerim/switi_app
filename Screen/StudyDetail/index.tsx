import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import StudyInfo from './components/StudyInfo';
import BottomButton from './components/BottomButton';
import OtherInfo from './components/OtherInfo';
import StudyImage from './components/StudyImage';
import { useGoHome } from '../../util/navigationHooks';
import ApplyModal from './components/ApplyModal';
import CancelModal from './components/CancelModal';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';
import axios from 'axios';
import { GET_ONLINE_STUDY_LIST } from '../../redux/action';

const StudyDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const [content, setContent] = useState([]);
  const { onlineStudyList, offlineStudyList } = useSelector(
    (state: rootState) => state.studyReducer
  );

  useEffect(() => {
    setContent(onlineStudyList.concat(offlineStudyList));
  }, []);

  const item: any = content.find((i: any) => i.id === idx);

  const goHome = useGoHome();
  const [modalVisible, setModalVisible] = useState(false);
  // const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const closeCancelModal = () => setCancelModalVisible(false);

  const onClick = () => {
    //showModal();
    setCancelModalVisible(true);
  };

  // 이미지 불러오기
  const loadImg = (url: string) => {
    return 'http://localhost:4000/images/' + url;
  };

  return (
    <Container>
      <StudyImage
        done={item && item.flag === 0}
        onPress={goHome}
        img={item && loadImg(item.Images[0]?.imgPath)}
      />
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
      <BottomButton onPress={onClick} />
      <ApplyModal modalVisible={modalVisible} closeModal={closeModal} />
      <CancelModal
        modalVisible={cancelModalVisible}
        closeModal={closeCancelModal}
      />
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
  font-family: 'NotoSans-Bold';
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
