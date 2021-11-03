import React from 'react';
import styled from 'styled-components/native';
import FlagIcon from '../../../../Component/Icon/FlagIcon';

interface Props {
  title?: string;
  done?: boolean;
  detail?: boolean;
}

const TitleFlag: React.FC<Props> = ({ title, done, detail }) => {
  return (
    <Container>
      <Title detail={detail}>{title}</Title>
      <FlagIcon done={!done} />
    </Container>
  );
};

const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const Title = styled.Text<Props>`
  font-weight: bold;
  font-size: ${(props) => (props.detail ? '20px' : '14px')};
  color: #2b2b2b;
  flex: 3;
  padding-right: 5px;
`;

export default TitleFlag;
