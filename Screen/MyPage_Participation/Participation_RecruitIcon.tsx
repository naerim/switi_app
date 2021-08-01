import React from 'react';
import styled from 'styled-components/native';

interface Props {
  done?: boolean;
  use?: string;
}

const Participation_RecruitIcon: React.FC<Props> = ({ done, use }) => {
  return (
    <Container done={done} use={use}>
      <Title use={use}>{done ? '모집마감' : '모집중'}</Title>
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
  ${(props) =>
    props.use === 'StudyDetail'
      ? `bottom:10px; right:24px`
      : `top:5px; left:5px`};
`;

const Title = styled.Text<Props>`
  color: white;
  font-size: ${(props) => (props.use === 'StudyDetail' ? '12px' : '10px')};
`;

export default Participation_RecruitIcon;
