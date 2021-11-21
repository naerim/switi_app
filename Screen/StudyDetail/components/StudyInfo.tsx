import React from 'react';
import styled from 'styled-components/native';
import { DataType } from '../../Home/interface';

interface Props {
  item?: DataType;
}
const StudyInfo: React.FC<Props> = ({ item }) => {
  const setRegion = () => {
    return item?.Regions.length == 0
      ? '온라인'
      : item?.Regions.map((guObj: any) => `${guObj.city}`).join(', ');
  };
  const studyInfoList = [
    {
      name: '카테고리',
      value: item?.Interests.map(
        (interestObj: any) => `${interestObj.category}`
      ).join(', '),
    },
    {
      name: '지역',
      value: setRegion(),
    },
    {
      name: '모집대상',
      value: item?.States.map((stateObj: any) => `${stateObj.category}`).join(
        ', '
      ),
    },
    {
      name: '모집인원',
      value: item?.recruit_num,
    },
    {
      name: '모임장소',
      value: item?.detail_address,
    },
    {
      name: '활동기간',
      value: item?.period,
    },
    {
      name: '스터디 예정 종료일',
      value: item?.endDate.toString().split('T')[0],
    },
    {
      name: '문의',
      value: item?.contact,
    },
  ];

  return (
    <Container>
      {studyInfoList.map(({ name, value }) => (
        <Content key={name}>
          <Name>{name}</Name>
          <Value>{value}</Value>
        </Content>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex: 3;
  padding: 0 24px;
`;

const Content = styled.View`
  flex-direction: row;
  flex: 1;
`;

const Name = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
`;

const Value = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
  position: absolute;
  left: 35%;
`;

export default StudyInfo;
