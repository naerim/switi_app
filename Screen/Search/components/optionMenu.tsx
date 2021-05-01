import React from 'react';
import styled from 'styled-components/native';

interface Props {
  onPressSearchDelete: () => void;
}

const OptionMenu: React.FC<Props> = ({ onPressSearchDelete }) => {
  return (
    <Container>
      <ItemContainer>
        <Title>최근 검색어</Title>
        <DeleteContainer onPress={onPressSearchDelete}>
          <DeleteSearches>전체 삭제</DeleteSearches>
        </DeleteContainer>
      </ItemContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  padding: 0 24px;
  margin-top: 10px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
`;

const DeleteContainer = styled.TouchableOpacity``;

const DeleteSearches = styled.Text`
  text-decoration: #b4b4b4 underline;
  color: #b4b4b4;
  font-size: 12px;
`;

export default OptionMenu;
