import React from 'react';
import styled from 'styled-components/native';
import RecruitIcon from '../../../../Component/Icon/RecruitIcon';

interface Props {
  title: string;
  done: boolean;
}

const TitleFlag: React.FC<Props> = ({ title, done }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <RecruitIcon done={!done} />
    </Container>
  );
};

const Container = styled.View`
  justify-content: space-between;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #2b2b2b;
`;

export default TitleFlag;
