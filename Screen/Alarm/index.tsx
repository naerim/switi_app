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
      <SwitchContainer>
        <View style={styles.container}>
          <Text>{switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
          <Switch
            style={{ marginTop: 30 }}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </View>
      </SwitchContainer>
    </BasicContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

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
  background-color: skyblue;
  flex: 10;
`;

const BasicText = styled.Text`
  font-size: 12px;
`;

export default Alarm;
