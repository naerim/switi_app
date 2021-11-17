import React from 'react';
import styled from 'styled-components/native';

const Notice_1 = () => {
  return (
    <Container>
      <Desc>
        스터디에 부적절한 콘텐츠(모욕적으로 의도적으로 혐오감을 주는 등)가
        있다면 문의를 통해 연락주시기 바랍니다.
      </Desc>
    </Container>
  );
};

const Container = styled.View``;

const Desc = styled.Text`
  font-size: 12px;
`;

export default Notice_1;
