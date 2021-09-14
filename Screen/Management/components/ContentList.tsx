import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Proceeding from './RenderItem/Proceeding';
import Recruitment from './RenderItem/Recruitment';

interface Props {
  idx: number;
}

const study = [
  {
    idx: 0,
    username: '작성자1',
    online_flag: 0,
    title: '파이썬 스터디 같이 하실 분',
    desc:
      '기상시간 체크는 기본, 동기 부여 등 같이 파이썬 스터디 하실 분들 모집합니다. 열심히 할 자신 있는 분만 지원해주세요.',
    category: 'IT',
    address: '서울',
    target: '무관',
    recruit_num: '5',
    detail_address: '신촌역 근처',
    period: '3개월',
    contact: '010-1233-2333',
    createAt: '2021-03-30',
    endDate: '2021-05-01',
    scrap: 10,
    flag: 1,
  },
  {
    idx: 1,
    username: '작성자2',
    online_flag: 0,
    title: '알고리즘 스터디 같이 하실 분',
    desc:
      '알고리즘 스터디 부원 모집합니다. 열심히 할 자신 있는 분만 지원해주세요.',
    category: 'IT',
    address: '경기도',
    target: '대학생',
    recruit_num: '4',
    detail_address: '일산 - 백마역 근처',
    period: '3개월',
    contact: '010-1233-3333',
    createAt: '2021-04-01',
    endDate: '2021-06-01',
    scrap: 8,
    flag: 1,
  },
];

const ContentList: React.FC<Props> = ({ idx }) => {
  return (
    <Container>
      <FlatList
        data={study}
        renderItem={useCallback(
          ({ item }) =>
            // 0: 진행중, 1: 모집글
            idx == 0 ? (
              <Proceeding index={item.idx} item={item} />
            ) : (
              <Recruitment index={item.idx} item={item} />
            ),
          []
        )}
        keyExtractor={(item: any) => item.idx.toString()}
      />
    </Container>
  );
};

const Container = styled.View`
  margin: 24px;
`;

export default ContentList;
