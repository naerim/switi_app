import React from 'react';
import styled from 'styled-components/native';
import RecruitIcon from '../../../../Component/Icon/RecruitIcon';
import FlagIcon from "../../../../Component/Icon/FlagIcon";

interface Props {
  title: string;
  done: boolean;
}

const TitleFlag: React.FC<Props> = ({ title, done }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <FlagIcon done={!done} />
    </Container>
  );
};

const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #2b2b2b;
`;

export default TitleFlag;
