import React from 'react';
import RegionItem from './RegionTtem';
import styled from 'styled-components/native';

interface ListItemProps {
  key: number;
  name: string;
}

interface PrintListProps {
  Items: ListItemProps[];
  flexDirection?: string;
}

const PrintRegion: React.FC<PrintListProps> = ({ Items, flexDirection }) => {
  return (
    <Container flexDirection={flexDirection}>
      {Items.map((Item) => (
        <RegionItem Item={Item} key={Item.key} />
      ))}
    </Container>
  );
};
const Container = styled.View`
  flex-direction: ${({ flexDirection }: { flexDirection?: string }) =>
    flexDirection || 'row'};
`;

export default PrintRegion;
