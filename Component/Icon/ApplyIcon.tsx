import React from 'react';
import styled from 'styled-components/native';

interface Props {
  done?: boolean;
  apply?: number;
  color?: string;
}

const ApplyIcon: React.FC<Props> = ({ done, apply }) => {
  const setIconText = () => {
    // apply: 0이면 수락대기, 1이면 수락완료
    // done이면 모집완료
    if (apply === 0) return '수락대기';
    else if (apply === 2) return '수락대기';
    else return done ? '모집완료' : '수락완료';
  };

  // icon 배경색상 설정
  const setIconColor = () => {
    if (apply === 0) return '#b4b4b4';
    else if (apply === 2) return '#b4b4b4';
    else return done ? '#707071' : '#4fd5a7';
  };

  return (
    <Container color={setIconColor()}>
      <Title>{setIconText()}</Title>
    </Container>
  );
};

const Container = styled.View<Props>`
  background-color: ${(props) => props.color};
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  width: 46px;
  height: 20px;
`;

const Title = styled.Text<Props>`
  color: white;
  font-size: 10px;
`;

export default ApplyIcon;
