import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Switch, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import BasicContainer from '../../Component/BasicContainer';
import { useGoMyPage } from '../../util/navigationHooks';
import ColorButton from '../../Component/ColorButton';

const Alarm = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onPress = () => console.log('설정으로 이동');
  const toggleSwitch = (value: any) => {
    setSwitchValue(value);
  };

  const goMyPage = useGoMyPage();

  return (
    <BasicContainer onPress={goMyPage} display headerTitle="알림설정">
      <TopTextContainer>
        <BasicText>이런, 기기 알림이 꺼져있네요!</BasicText>
      </TopTextContainer>
      <ButtonContainer>
        <ColorButton
          text="기기 알림 설정하기"
          onPress={onPress}
          loading={isLoading}
          color="#86E3C3"
        />
      </ButtonContainer>
      <AllSwithContainer>
        <SwitchContainer>
          <SwitchTextContainer>
            <BasicText>관심 스터디/클래스 알림</BasicText>
            <SmallText>
              내 프로필 설정에 맞는 스터디/클래스가 올라왔을 때
            </SmallText>
          </SwitchTextContainer>
          <Switch
            onValueChange={toggleSwitch}
            value={switchValue}
            trackColor={{
              true: '#86E3C3',
              false: '#DBDBDB',
            }}
          />
        </SwitchContainer>
        <SwitchContainer>
          <SwitchTextContainer>
            <BasicText>스터디/클래스 신청 알림</BasicText>
            <SmallText>누군가 내 스터디/클래스를 신청했을 때 </SmallText>
          </SwitchTextContainer>
          <Switch
            onValueChange={toggleSwitch}
            value={switchValue}
            trackColor={{
              true: '#86E3C3',
              false: '#DBDBDB',
            }}
          />
        </SwitchContainer>
        <SwitchContainer>
          <SwitchTextContainer>
            <BasicText>스터디/클래스 수락 알림</BasicText>
            <SmallText>스터디/클래스 신청이 수락되었을 때</SmallText>
          </SwitchTextContainer>
          <Switch
            onValueChange={toggleSwitch}
            value={switchValue}
            trackColor={{
              true: '#86E3C3',
              false: '#DBDBDB',
            }}
          />
        </SwitchContainer>
        <SwitchContainer>
          <SwitchTextContainer>
            <BasicText>상호평가 알림</BasicText>
            <SmallText>
              스터디 기간 완료 후 스터디원 상호평가가 필요할 때
            </SmallText>
          </SwitchTextContainer>
          <Switch
            onValueChange={toggleSwitch}
            value={switchValue}
            trackColor={{
              true: '#86E3C3',
              false: '#DBDBDB',
            }}
          />
        </SwitchContainer>
      </AllSwithContainer>
    </BasicContainer>
  );
};

const TopTextContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`;

const AllSwithContainer = styled.View`
  flex: 10;
`;

const BasicText = styled.Text`
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SmallText = styled.Text`
  font-size: 10px;
  color: #b4b4b4;
  margin-bottom: 10px;
`;

const SwitchTextContainer = styled.View`
  text-align: left;
`;
export default Alarm;
