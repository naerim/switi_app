import React from 'react';
import styled from 'styled-components/native';
import { ImageProps } from 'react-native';

interface SugarExpressionProps {
  imageSource: ImageProps;
  sugarContent: number;
}

const SugarExpression: React.FC<SugarExpressionProps> = ({
  imageSource,
  sugarContent,
}) => (
  <Container>
    <SugarImage source={imageSource} />
    <Text>{sugarContent}%</Text>
  </Container>
);

const Container = styled.TouchableOpacity`
  position: relative;
  justify-content: center;
`;

const SugarImage = styled.Image`
  width: 25.17px;
  height: 40.19px;
`;

const Text = styled.Text`
  font-size: 11px;
  color: #86e3c3;
  margin-top: 10px;
`;
export default SugarExpression;
