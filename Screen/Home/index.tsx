import React from 'react';
import styled from 'styled-components/native';
import StudyFlatList from './components/StudyFlatList';
import { useGoStudyDetail } from '../../util/navigationHooks';

const Home = ({ route }: any) => {
  // 0 : 온라인, 1 : 오프라인
  const idx = route.params.idx;
  const goStudyDetail = useGoStudyDetail();

  return (
    <Container>
      <CategoryArea>
        <CategoryText>카테고리영역</CategoryText>
      </CategoryArea>
      <StudyFlatList idx={idx} onPress={goStudyDetail} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const CategoryArea = styled.View`
  margin-left: 24px;
  padding: 24px 0;
`;

const CategoryText = styled.Text`
  font-size: 12px;
`;

export default Home;
