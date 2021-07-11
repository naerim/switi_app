import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Switch } from 'react-native';
import { useGoMyPage } from '../../util/navigationHooks';
import ColorButton from '../../Component/BasicButton';
import AlarmContainer from '../../Component/ContainerWithBack';
import useScroll from '../../util/useScroll';

const Alarm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onPress = () => console.log('설정으로 이동');
  const { scroll, scrollOn } = useScroll();

  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value: any) => {
    setSwitchValue(value);
  };

  //관심 스터디/클래스 알림
  const [interestSwitchValue, setInterestSwitchValue] = useState(false);
  const interestToggleSwitch = (value: any) => {
    setInterestSwitchValue(value);
  };

  //스터디/클래스 신청 알림
  const [applySwitchValue, setApplySwitchValue] = useState(false);
  const applyToggleSwitch = (value: any) => {
    setApplySwitchValue(value);
  };

  //스터디/클래스 수락 알림
  const [acceptSwitchValue, setAcceptSwitchValue] = useState(false);
  const acceptToggleSwitch = (value: any) => {
    setAcceptSwitchValue(value);
  };

  //상호평가 알림
  const [evaluationSwitchValue, setEvaluationSwitchValue] = useState(false);
  const evaluationToggleSwitch = (value: any) => {
    setEvaluationSwitchValue(value);
  };

  //다크모드
  //상호평가 알림
  const [darkModeSwitchValue, setDarkModeSwitchValue] = useState(false);
  const darkModeToggleSwitch = (value: any) => {
    setDarkModeSwitchValue(value);
  };

  const goMyPage = useGoMyPage();

  return (
    <AlarmContainer
      onPress={goMyPage}
      display
      headerTitle="설정"
      scroll={scroll}
    >
      <ScrollContainer onScroll={scrollOn}>
        <TopTextContainer>
          <BasicText>이런, 기기 알림이 꺼져있네요!</BasicText>
        </TopTextContainer>
        <ButtonContainer>
          <ColorButton
            text="기기 알림 설정하기"
            onPress={onPress}
            loading={isLoading}
          />
        </ButtonContainer>
        <AllSwitchContainer>
          <SwitchContainer>
            <SwitchTextContainer>
              <BasicText>관심 스터디/클래스 알림</BasicText>
              <SmallText>
                내 프로필 설정에 맞는 스터디/클래스가 올라왔을 때
              </SmallText>
            </SwitchTextContainer>
            <Switch
              onValueChange={interestToggleSwitch}
              value={interestSwitchValue}
              trackColor={{
                true: '#86E3C3',
                false: '#DBDBDB',
              }}
            />
          </SwitchContainer>
          <SmallLine />
          <SwitchContainer>
            <SwitchTextContainer>
              <BasicText>스터디/클래스 신청 알림</BasicText>
              <SmallText>누군가 내 스터디/클래스를 신청했을 때 </SmallText>
            </SwitchTextContainer>
            <Switch
              onValueChange={applyToggleSwitch}
              value={applySwitchValue}
              trackColor={{
                true: '#86E3C3',
                false: '#DBDBDB',
              }}
            />
          </SwitchContainer>
          <SmallLine />
          <SwitchContainer>
            <SwitchTextContainer>
              <BasicText>스터디/클래스 수락 알림</BasicText>
              <SmallText>스터디/클래스 신청이 수락되었을 때</SmallText>
            </SwitchTextContainer>
            <Switch
              onValueChange={acceptToggleSwitch}
              value={acceptSwitchValue}
              trackColor={{
                true: '#86E3C3',
                false: '#DBDBDB',
              }}
            />
          </SwitchContainer>
          <SmallLine />
          <SwitchContainer>
            <SwitchTextContainer>
              <BasicText>상호평가 알림</BasicText>
              <SmallText>
                스터디 기간 완료 후 스터디원 상호평가가 필요할 때
              </SmallText>
            </SwitchTextContainer>
            <Switch
              onValueChange={evaluationToggleSwitch}
              value={evaluationSwitchValue}
              trackColor={{
                true: '#86E3C3',
                false: '#DBDBDB',
              }}
            />
          </SwitchContainer>
        </AllSwitchContainer>
        <BigLine />
        <AllSwitchContainer>
          <SwitchContainer>
            <SwitchTextContainer>
              <BasicText>다크모드</BasicText>
            </SwitchTextContainer>
            <Switch
              onValueChange={darkModeToggleSwitch}
              value={darkModeSwitchValue}
              trackColor={{
                true: '#86E3C3',
                false: '#DBDBDB',
              }}
            />
          </SwitchContainer>
          <SmallLine />
        </AllSwitchContainer>
      </ScrollContainer>
    </AlarmContainer>
  );
};

const ScrollContainer = styled.ScrollView``;
const TopTextContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin: 10px 24px;
`;

const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const AllSwitchContainer = styled.View`
  flex: 10;
  margin-top: 10px;
  margin-right: 24px;
  margin-left: 24px;
`;

const BasicText = styled.Text`
  font-size: 12px;
  margin-bottom: 5px;
`;

const SmallText = styled.Text`
  font-size: 10px;
  color: #b4b4b4;
`;

const SwitchTextContainer = styled.View`
  text-align: left;
`;

const SmallLine = styled.Text`
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
  margin-top: 15px;
`;

const BigLine = styled.Text`
  flex: 0.2;
  background-color: #f3f3f3;
  margin-top: 25px;
`;
export default Alarm;
