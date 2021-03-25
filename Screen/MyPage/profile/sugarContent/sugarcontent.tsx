import * as React from 'react';
import styled from 'styled-components/native';
// import * as Progress from 'expo-progress';
// import PregressBar from '../../progressBar/progressbar';

const SugarContent = () => {
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

  const currentSwiti = 50;

  const switiChoice = (currentSiwiti) => {
    let result = 0;
    console.log(currentSwiti);
    if (0 <= currentSwiti && currentSwiti <= 10) {
      result = 1;
      console.log(result);
    } else if (10 < currentSwiti && currentSwiti <= 40) {
      result = 2;
      console.log(result);
    } else if (40 < currentSwiti && currentSwiti <= 55) {
      result = 3;
      console.log(result);
    } else if (55 < currentSwiti && currentSwiti <= 80) {
      result = 4;
      console.log(result);
    } else if (80 < currentSwiti && currentSwiti <= 90) {
      result = 5;
      console.log(result);
    } else if (90 < currentSwiti && currentSwiti <= 100) {
      result = 6;
      console.log(result);
    } else console.log('오류');
    return result;
  };

  switiChoice(5);

  return (
    <Container>
      <SugarContainer>
        <SugarImage source={require('./image/3switi.png')} />
        <Text>50%</Text>
      </SugarContainer>
      {/*<PregressBar />*/}
      {/*<Progress.Bar isIndeterminate color="blue" />*/}
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
`;

const SugarContainer = styled.View`
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

export default SugarContent;
