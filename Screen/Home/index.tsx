import React, { useState } from 'react';
import styled from 'styled-components/native';
import StudyFlatList from './components/StudyFlatList';
import TopCategory from './components/TopCategory';

const Home = ({ route }: any) => {
  const [tagChange, setTagChange] = useState(false);
  const [tagList, setTagList] = useState<
    { key: number; name: string; category: string }[]
  >([]);
  // 0 : 온라인, 1 : 오프라인
  const idx = route.params.idx;

  return (
    <Container>
      <TopCategory
        tagList={tagList}
        setTagList={setTagList}
        tagChange={tagChange}
        setTagChange={setTagChange}
      />
      <StudyFlatList
        idx={idx}
        tagList={tagList}
        tagChange={tagChange}
        setTagChange={setTagChange}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export default Home;
