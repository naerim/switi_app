import React from 'react';
import styled from 'styled-components/native';
import RecommendWords from './RecommendWords';

interface Props {
  onRecommendWord: (word: string) => void;
}

const RecommendContainer: React.FC<Props> = ({ onRecommendWord }) => {
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
      text: '중국어',
    },
  ];
  return (
    <Container>
      <Title>추천 검색어</Title>
      {recommendData.map(({ text }) => (
        <RecommendWords
          key={text}
          word={text}
          onRecommendWord={onRecommendWord}
        />
      ))}
    </Container>
  );
};

const Container = styled.View`
  padding: 0 24px;
`;

const Title = styled.Text`
  color: #b4b4b4;
  margin: 10px 0;
  font-size: 12px;
`;

export default RecommendContainer;
