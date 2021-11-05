import React from 'react';
import styled from 'styled-components/native';
import BasicHeader from '../../Component/BasicHeader';
import {
  useGoManageRecruit,
} from '../../util/navigationHooks';

const Evaluation = ({ route }: any) => {
  const idx = route.params.idx;
  const title = route.params.title;

  const GoManageRecruit = useGoManageRecruit(idx, title);

  return (
    <Container>
      <BasicHeader
        title={'상호평가'}
        onPress={GoManageRecruit}
        display={true}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
export default Evaluation;
