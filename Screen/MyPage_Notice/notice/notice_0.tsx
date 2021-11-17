import React from 'react';
import styled from 'styled-components/native';

const Notice_0 = () => {
  return (
    <Container>
      <Desc>안녕하세요.</Desc>
      <Desc>
        팀 '스위티'는 앱 서비스 제작 동아리에서 만난 개발자와 디자이너로
        이루어진 팀입니다. 이 프로젝트는 고양시청소년드림, 이루어DREAM의 후원을
        받아 진행되었습니다.
      </Desc>
      <Title>Switi (Share Worthy Information Together, and Improve)</Title>
      <Desc>
        {'사회적 거리두기가 일상으로 자리 잡으면서, 집에만 있는 시간이 늘어가고 있습니다.' +
          ' 이런 사회적 분위기 속에서 사람들과의 소통을 하기가 어렵게만 느껴지는데,' +
          ' 저희는 스위티를 통해 같은 목표를 가진 사람들기리의 소통의 장을 마련하고, 함께 성장해 나갈 수 있도록 돕고자 합니다.'}
      </Desc>
      <Tag>#고양시청소년드림 #이루어DREAM</Tag>
    </Container>
  );
};

const Container = styled.View``;

const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Desc = styled.Text`
  font-size: 12px;
`;

const Tag = styled.Text`
  font-size: 12px;
  padding-top: 40px;
`;

export default Notice_0;
