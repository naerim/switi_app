import React from 'react';
import styled from 'styled-components/native';
import CheckBox from 'react-native-check-box';
import { useGoTerms } from '../../../util/navigationHooks';

const AgreeCheckBox = ({ check }) => {
  const allCheck = check.checked.service && check.checked.info;
  const goService = useGoTerms(0);
  const goInfo = useGoTerms(1);

  const setAll = () => {
    const changeValue = !allCheck;
    check.setChecked({ service: changeValue, info: changeValue });
  };

  const itemCheck = (key: string) => {
    check.setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
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
        isChecked={check.checked.service}
        onClick={() => {
          itemCheck('service');
          goService();
        }}
      />
      <CheckBox
        rightText="개인정보 처리 방침 (필수)"
        rightTextStyle={{ fontSize: 12, textDecorationLine: 'underline' }}
        checkBoxColor="#E3E3E3"
        isChecked={check.checked.info}
        onClick={() => {
          itemCheck('info');
          goInfo();
        }}
      />
    </Container>
  );
};

const Container = styled.View``;

const Line = styled.Text`
  height: 1px;
  background-color: #e3e3e3;
  margin: 8px 0;
`;

export default AgreeCheckBox;
