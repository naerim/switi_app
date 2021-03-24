import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
}

const UserName: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <User>
        {title}
        <Nym> 님</Nym>
      </User>
    </Container>
  );
};

const User = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 24px;
`;

const Nym = styled.Text`
  font-size: 14px;
`;

const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export default UserName;
