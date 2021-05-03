import React from 'react';
import styled from 'styled-components/native';
import IconImg from '../Img/icon_filter.png';

interface Props {
  onPress: () => void;
  text?: string;
}

const SelectButton: React.FC<Props> = ({ onPress, text }) => {
  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <ButtonText>{text ? text : '선택해 주세요'}</ButtonText>
      <Icon source={IconImg} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  border-width: 1px;
  border-radius: 4px;
  font-size: 12px;
  height: 40px;
  padding: 0 12px;
  border-color: #e3e3e3;
  align-items: center;
  justify-content: space-between;
`;

const ButtonText = styled.Text`
  color: #e3e3e3;
  font-size: 12px;
`;

const Icon = styled.Image`
  width: 12px;
  height: 12px;
`;

export default SelectButton;
