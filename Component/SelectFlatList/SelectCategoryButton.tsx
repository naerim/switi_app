import React from 'react';
import styled from 'styled-components/native';

interface Props {
  onPress: () => void;
}

const SelectCategoryButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <Title>선택하기</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: #86e3c3;
  border-radius: 32px;
  height: 40px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 14px;
  color: white;
  text-align: center;
`;

export default SelectCategoryButton;
