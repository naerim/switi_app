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
    <Wrap>
      <Title>추천 검색어</Title>
      {recommendData.map(({ text }) => (
        <RecommendTerm key={text} term={text} />
      ))}
    </Wrap>
  );
};

const Wrap = styled.View`
  width: 100%;
  padding: 0 20px;
  margin: 5px 0;
`;

const Title = styled.Text`
  font-weight: bold;
  color: #b4b4b4;
`;

export default RecommendContainer;
