import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicHeader from '../../Component/BasicHeader';
import { useGoManageRecruit } from '../../util/navigationHooks';

const Evaluation = ({ route }: any) => {
  const idx = route.params.idx;
  const title = route.params.title;

  const GoManageRecruit = useGoManageRecruit(idx, title);
  const [participation, setParticipation] = useState(0);
  return (
    <Container>
      <BasicHeader
        title={'상호평가'}
        onPress={GoManageRecruit}
        display={true}
      />
      <Content>
        <Text>
          평가결과는 모든 스터디원 평가 점수를 평균으로 환산하여 상대방의 당도에
          반영됩니다.
        </Text>
        <OpponentContainer>
          <OpponentImg></OpponentImg>
          <OpponentText>상대 닉네임</OpponentText>
        </OpponentContainer>
        <EvaluationContainer>
          <Text>참여도</Text>
          <Question>@@님은 스터디에 성실히 참여했나요?</Question>
          <NumberContainer>
            <Number>1</Number>
            <Number>2</Number>
            <Number>3</Number>
            <Number>4</Number>
            <Number>5</Number>
          </NumberContainer>
          <RadioContainer>
            <RadioButtonCheck>
              <Check></Check>
            </RadioButtonCheck>
            <RadioButton></RadioButton>
            <RadioButton></RadioButton>
            <RadioButton></RadioButton>
            <RadioButton></RadioButton>
          </RadioContainer>
          <NumberContainer>
            <Number>매우 아니다</Number>
            <Number>아니다</Number>
            <Number>보통이다</Number>
            <Number>그렇다</Number>
            <Number>매우그렇다</Number>
          </NumberContainer>
        </EvaluationContainer>
      </Content>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Content = styled.View`
  flex: 12;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 26px;
`;

const Text = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
`;

const OpponentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 30px 0;
`;

const OpponentImg = styled.View`
  background-color: #d1d1d1;
  width: 46px;
  height: 46px;
  border-radius: 50px;
  margin-right: 10px;
`;

const OpponentText = styled.Text`
  font-size: 16px;
`;

const EvaluationContainer = styled.View`
  margin-bottom: 30px;
`;

const Question = styled.Text`
  margin: 5px 0;
  font-size: 14px;
`;

const RadioContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
`;

const RadioButton = styled.View`
  border: 1px solid #b4b4b4;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  z-index: 1;
`;

const RadioButtonCheck = styled.TouchableOpacity`
  background-color: #86e3c3;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const NumberContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;

const Number = styled.Text`
  width: 12px;
  height: 12px;
  color: #b4b4b4;
  font-size: 10px;
  text-align: center;
`;

const Check = styled.TouchableOpacity`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  border: 1px solid white;
  z-index: 1;
`;

export default Evaluation;
