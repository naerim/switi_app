import React from 'react';
import styled from 'styled-components/native';
import RecommendTerm from './RecommendTerm';

const RecommendContainer: React.FC = () => {
  const recommendData = [
    {
      text: 'NCS',
    },
    {
      text: '공기',
    },
    {
      text: '면접 스터디',
    },
    {
      text: '스페인어 취미',
    },
    {
      text: '가상 인증',
    },
  ];
  return (
    <Container>
      <Title>추천 검색어</Title>
      {recommendData.map(({ text }) => (
        <RecommendTerm key={text} term={text} />
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex: 5;
  padding: 0 24px;
`;

const Title = styled.Text`
  color: #b4b4b4;
  margin: 10px 0;
  font-size: 12px;
`;

export default RecommendContainer;
