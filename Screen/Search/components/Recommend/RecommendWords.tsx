import React from 'react';
import styled from 'styled-components/native';

interface Props {
  word: string;
  onRecommendWord: (word: string) => void;
}

const RecommendWords: React.FC<Props> = ({ word, onRecommendWord }) => {
  return (
    <Container>
      <TouchContainer onPress={() => onRecommendWord(word)}>
        <Text>{word}</Text>
      </TouchContainer>
      <Line />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const Line = styled.Text`
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
`;

const TouchContainer = styled.TouchableOpacity``;

const Text = styled.Text`
  font-size: 12px;
  color: #2b2b2b;
  padding: 14px 0;
`;

export default RecommendWords;
