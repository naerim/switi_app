import React from 'react';
import ListItem from './listItem';
import styled from 'styled-components/native';

interface InnerListProps {
  key: number;
  name: string;
  category?: string;
}

interface PrintListProps {
  lists: InnerListProps[];
  flexDirection?: string;
}

const PrintList: React.FC<PrintListProps> = ({ lists, flexDirection }) => {
  return (
    <Container flexDirection={flexDirection}>
      {lists.map((list) => (
        <ListItem list={list} key={list.key} />
      ))}
    </Container>
  );
};
const Container = styled.View`
  flex-direction: ${({ flexDirection }: { flexDirection?: string }) =>
    flexDirection || 'row'};
`;

export default PrintList;
