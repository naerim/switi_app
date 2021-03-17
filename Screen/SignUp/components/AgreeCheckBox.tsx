import React, { useState } from 'react';
import styled from 'styled-components/native';
import CheckBox from 'react-native-check-box';

const AgreeCheckBox = () => {
  const [all, setAll] = useState(false);
  const [service, setService] = useState(false);
  const [info, setInfo] = useState(false);
  const [event, setEvent] = useState(false);

  return (
    <Container>
      <CheckBox
        rightText="아래 약관에 모두 동의합니다"
        rightTextStyle={{ fontSize: 12 }}
        checkBoxColor="#E3E3E3"
        isChecked={all}
        onClick={() => {
          setAll(!all);
        }}
      />
      <Line />
      <CheckBox
        rightText="서비스 이용약관 (필수)"
        rightTextStyle={{ fontSize: 12, textDecorationLine: 'underline' }}
        checkBoxColor="#E3E3E3"
        isChecked={service}
        onClick={() => {
          setService(!service);
        }}
      />
      <CheckBox
        rightText="개인정보 처리 방침 (필수)"
        rightTextStyle={{ fontSize: 12, textDecorationLine: 'underline' }}
        checkBoxColor="#E3E3E3"
        isChecked={info}
        onClick={() => {
          setInfo(!info);
        }}
      />
      <CheckBox
        rightText="이벤트 등 프로모션 알림 메일 수신 (선택)"
        rightTextStyle={{ fontSize: 12 }}
        checkBoxColor="#E3E3E3"
        isChecked={event}
        onClick={() => {
          setEvent(!event);
        }}
      />
    </Container>
  );
};

const Container = styled.View``;

const Line = styled.Text`
  height: 1px;
  background-color: #e3e3e3;
  margin: 5px 0;
`;

export default AgreeCheckBox;
