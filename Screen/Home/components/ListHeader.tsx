import React from 'react';
import styled from 'styled-components/native';
import CheckBox from 'react-native-check-box';

interface Props {
  num: number;
  check: { checked: boolean; setChecked: (b: boolean) => void };
}

const ListHeader: React.FC<Props> = ({ num, check }) => {
  const onClick = () => {
    check.setChecked(!check.checked);
  };

  return (
    <Container>
      <Number>총 {num}건</Number>
      <CheckBox
        style={{ position: 'absolute', right: 35 }}
        checkBoxColor="#fdc4bd"
        isChecked={check.checked}
        onClick={onClick}
      />
      <Number>최신순</Number>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Number = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
`;

export default ListHeader;
