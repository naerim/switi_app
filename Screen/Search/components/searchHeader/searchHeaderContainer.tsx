import React from 'react';
import styled from 'styled-components/native';
import SearchHeader from './searchHeader';

interface Props {
  headerTitle: string;
}

const SearchContainer: React.FC<Props> = ({ children, headerTitle }) => {
  return (
    <Wrap>
      <SearchHeader title={headerTitle} />
      <Container>{children}</Container>
    </Wrap>
  );
};

const Wrap = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default SearchContainer;
