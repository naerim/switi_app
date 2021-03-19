import React from 'react';
import styled from 'styled-components/native';
import BasicHeader from './BasicHeader';

interface Props {
  headerTitle: string;
  display: boolean;
  onPress?: () => void;
}

const BasicContainer: React.FC<Props> = ({
  children,
  headerTitle,
  onPress,
  display,
}) => {
  return (
    <Wrap>
      <BasicHeader title={headerTitle} onPress={onPress} display={display} />
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
  margin: 0 24px;
  background-color: #fff;
`;

export default BasicContainer;
