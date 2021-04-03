import React from 'react';
import styled from 'styled-components/native';

interface Props {
  done: boolean;
}

const RecruitIcon: React.FC<Props> = ({ done }) => {
  return (
    <Container done={done}>
      <Title>{done ? '모집완료 ' : '모집중'}</Title>
    </Container>
  );
};

const Container = styled.View<Props>`
  background-color: ${(props) => (props.done ? '#b4b4b4' : '#4fd5a7')};
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  position: absolute;
  left: 5px;
  top: 5px;
`;

const Title = styled.Text`
  color: white;
  font-size: 10px;
`;

export default RecruitIcon;
