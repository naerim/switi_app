import React from 'react';
import styled from 'styled-components/native';
import ArrangeIcon from '../../../Img/icon_arrange.png';

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
      <RightWrap onPress={onClick}>
        <Icon source={ArrangeIcon} />
        <Number>{check.checked ? '인기순' : '최신순'}</Number>
      </RightWrap>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const RightWrap = styled.TouchableOpacity`
  flex-direction: row;
`;

const Number = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
`;

const Icon = styled.Image`
  width: 18px;
  height: 14px;
  margin-right: 5px;
`;

export default ListHeader;
