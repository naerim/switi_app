import React, { useState } from 'react';
import { Switch, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import BasicContainer from '../../Component/BasicContainer';
import { useGoMyPage } from '../../util/navigationHooks';
const Alarm = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value: any) => {
    setSwitchValue(value);
  };

  const goMyPage = useGoMyPage();

  return (
    <BasicContainer onPress={goMyPage} display headerTitle="알림설정">
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>{switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
          <Switch
            style={{ marginTop: 30 }}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </View>
      </SafeAreaView>
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

export default Alarm;
