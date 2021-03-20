import React, { useState } from 'react';
import styled from 'styled-components/native';
import CheckBox from 'react-native-check-box';
import { useGoTerms } from '../../../util/navigationHooks';

const AgreeCheckBox = () => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({
    service: false,
    info: false,
    event: false,
  });

  const allCheck = checked.service && checked.info && checked.event;
  const goTerms = useGoTerms(0);
  const goTerms2 = useGoTerms(1);

  const setAll = () => {
    const changeValue = !allCheck;
    setChecked({ service: changeValue, info: changeValue, event: changeValue });
  };

  const itemCheck = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Container>
      <CheckBox
        rightText="아래 약관에 모두 동의합니다"
        rightTextStyle={{ fontSize: 12 }}
        checkBoxColor="#E3E3E3"
        isChecked={allCheck}
        onClick={setAll}
      />
      <Line />
      <CheckBox
        rightText="서비스 이용약관 (필수)"
        rightTextStyle={{ fontSize: 12, textDecorationLine: 'underline' }}
        checkBoxColor="#E3E3E3"
        isChecked={checked.service}
        onClick={() => {
          itemCheck('service');
          goTerms();
        }}
      />
      <CheckBox
        rightText="개인정보 처리 방침 (필수)"
        rightTextStyle={{ fontSize: 12, textDecorationLine: 'underline' }}
        checkBoxColor="#E3E3E3"
        isChecked={checked.info}
        onClick={() => {
          itemCheck('info');
          goTerms2();
        }}
      />
      <CheckBox
        rightText="이벤트 등 프로모션 알림 메일 수신 (선택)"
        rightTextStyle={{ fontSize: 12 }}
        checkBoxColor="#E3E3E3"
        isChecked={checked.event}
        onClick={() => {
          itemCheck('event');
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
