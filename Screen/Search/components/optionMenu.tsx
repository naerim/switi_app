import React from 'react';
import styled from 'styled-components/native';

interface Props {
  onPressSearchDelete: () => void;
}

const OptionMenu: React.FC<Props> = (onPressSearchDelete) => {
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
  width: 100%;
  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-weight: bold;
  color: #b4b4b4;
`;

const DeleteContainer = styled.TouchableOpacity``;

const DeleteSearches = styled.Text`
  font-weight: bold;
  text-decoration: #b4b4b4 underline;
  color: #b4b4b4;
`;

export default OptionMenu;
