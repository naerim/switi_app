import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
}

const UserInfo: React.FC<Props> = ({ title }) => {
  return (
    <UserName>
      {title}
      <Nym> 님</Nym>
    </UserName>
  );
};

const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 24px;
`;

const Nym = styled.Text`
  font-size: 14px;
`;

export default UserInfo;
