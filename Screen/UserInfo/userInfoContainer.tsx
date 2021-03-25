import React from 'react';
import styled from 'styled-components/native';
import BasicHeader from '../../Component/BasicHeader';

interface Props {
  headerTitle: string;
}

const UserInfoContainer: React.FC<Props> = ({ children, headerTitle }) => {
  return (
    <Wrap>
      <BasicHeader title={headerTitle} />
      <Container>{children}</Container>
    </Wrap>
  );
};

const Wrap = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default UserInfoContainer;
