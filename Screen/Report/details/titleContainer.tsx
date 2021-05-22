import React from 'react';
import styled from 'styled-components/native';
import check from '../../../Img/icon_filter.png';

interface TitleProps {
  onPress: () => void;
  titleText: string;
}

const TitleContainer: React.FC<TitleProps> = ({ onPress, titleText }) => {
  return (
    <Container onPress={onPress} activeOpacity={0.8}>
      <Title>{titleText}</Title>
      <Check source={check} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 14px;
`;

const Check = styled.Image`
  height: 13px;
  width: 13px;
`;

export default TitleContainer;
