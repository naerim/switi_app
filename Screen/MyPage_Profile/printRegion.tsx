import React from 'react';
import ListItem from './listItem';
import styled from 'styled-components/native';

interface ListItemProps {
  key: number;
  name: string;
}

interface PrintListProps {
  lists: ListItemProps[];
  flexDirection?: string;
}

const PrintRegion: React.FC<PrintListProps> = ({ lists, flexDirection }) => {
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

export default PrintRegion;
