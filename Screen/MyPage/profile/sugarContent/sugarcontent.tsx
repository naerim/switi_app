import * as React from 'react';
import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';
import { useState } from 'react';

interface switiChoiceProps {
  switi: number;
}

const SugarContent = () => {
  const [sugar, setSugar] = useState(70);
  const sugarData = [
    {
      grade: 1,
      image: './image/1switi.png',
      onPress: () => console.log('1단계 당도'),
    },
    {
      grade: 2,
      image: './image/2switi.png',
      onPress: () => console.log('2단계 당도'),
    },
    {
      grade: 3,
      image: './image/3switi.png',
      onPress: () => console.log('3단계 당도'),
    },
    {
      grade: 4,
      image: './image/4switi.png',
      onPress: () => console.log('4단계 당도'),
    },
    {
      grade: 5,
      image: './image/5switi.png',
      onPress: () => console.log('5단계 당도'),
    },
  ];

  const switiChoice: React.FC<switiChoiceProps> = ({ switi }) => {
    let result = 0;
    console.log(switi);
    if (0 <= switi && switi <= 10) {
      result = 1;
      console.log(result);
    } else if (10 < switi && switi <= 40) {
      result = 2;
      console.log(result);
    } else if (40 < switi && switi <= 55) {
      result = 3;
      console.log(result);
    } else if (55 < switi && switi <= 80) {
      result = 4;
      console.log(result);
    } else if (80 < switi && switi <= 90) {
      result = 5;
      console.log(result);
    } else if (90 < switi && switi <= 100) {
      result = 6;
      console.log(result);
    } else console.log('오류');
    return result;
  };

  // switiChoice(70);

  return (
    <Container>
      <SugarContainer>
        <SugarImage source={require('./image/3switi.png')} />
        <Text>50%</Text>
      </SugarContainer>
      <ProgressContainer>
        <Progress.Bar
          progress={sugar / 100}
          width={270}
          height={10}
          color="#86E3C3"
          unfilledColor="#F3F3F3"
          borderWidth={0}
        />
      </ProgressContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 86px;
  background-color: #fffcf5;
  border-radius: 20px;
  justify-content: center;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

const SugarContainer = styled.View`
  position: relative;
  justify-content: center;
`;

const ProgressContainer = styled.View`
  padding-left: 20px;
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

export default SugarContent;
