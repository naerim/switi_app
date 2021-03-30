import React from 'react';
import styled from 'styled-components/native';

interface Props {
  online: number;
}

const StudyImage: React.FC<Props> = ({ online }) => {
  return (
    <Container>
      <Flag>{online}</Flag>
    </Container>
  );
};

const Container = styled.View`
  background-color: #fdc4bd;
  flex: 1;
  width: 84px;
  height: 84px;
  align-items: center;
  justify-content: center;
`;

const Flag = styled.Text`
  font-size: 12px;
`;

export default StudyImage;
