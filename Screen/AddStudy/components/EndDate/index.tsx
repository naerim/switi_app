import React from 'react';
import styled from 'styled-components/native';
import EndDateInput from './EndDateInput';
import AddStudyContainer from '../Layout/AddStudyContainer';

const EndDate = () => {
  const desc =
    '입력한 예정 종료일로부터 한 달 동안 스터디 완료 및 갱신 처리를 하지\n않을 시 모집글은 자동 삭제되며, 예정 종료일은 추후 수정이 가능합니다.';
  return (
    <AddStudyContainer
      title="예정 종료일"
      subTitle="(스터디 예정 종료일을 입력해주세요)"
    >
      <EndDateInput />
      <Desc>{desc}</Desc>
    </AddStudyContainer>
  );
};

const Desc = styled.Text`
  color: #b4b4b4;
  font-size: 10px;
`;

export default EndDate;
