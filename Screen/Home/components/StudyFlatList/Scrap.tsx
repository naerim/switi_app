import React from 'react';
import styled from 'styled-components/native';
import NotScrapIcon from '../../../../Img/icon_notScrap.png';

interface Props {
  scrap?: number;
}

const Scrap: React.FC<Props> = ({ scrap }) => {
  return (
    <Container>
      <Icon source={NotScrapIcon} />
      <Item>{scrap}</Item>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.Image`
  margin-right: 5px;
  width: 10px;
  height: 10px;
`;

const Item = styled.Text`
  color: #2b2b2b;
  font-size: 10px;
`;

export default Scrap;
