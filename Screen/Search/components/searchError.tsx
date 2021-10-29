import React from 'react';
import styled from 'styled-components/native';

// interface Props {
//   onPressSearchDelete: () => void;
// }

const SearchError: React.FC = () => {
  return (
    <Container>
      <Text>검색 결과를 찾을 수 없어요 :(</Text>
      <TouchContainer>{/*<Text>첫 화면으로 돌아가기</Text>*/}</TouchContainer>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  padding: 0 24px;
  margin-top: 50%;
`;

const Text = styled.Text`
  color: #747474;
  font-size: 16px;
`;

const TouchContainer = styled.TouchableOpacity``;

export default SearchError;
