import React from 'react';
import ListItem from './listItem';
import styled from 'styled-components/native';

interface ListItemProps {
  id: number;
  text: string;
}

interface PrintListProps {
  lists: ListItemProps[];
  flexDirection?: string;
}

const PrintList: React.FC<PrintListProps> = ({ lists, flexDirection }) => {
  return (
    <Container flexDirection={flexDirection}>
      {lists.map((list) => (
        <ListItem list={list} key={list.id} />
      ))}
    </Container>
  );
};
const Container = styled.View`
  flex-direction: ${({ flexDirection }: { flexDirection?: string }) =>
    flexDirection || 'row'};
`;

export default PrintList;
