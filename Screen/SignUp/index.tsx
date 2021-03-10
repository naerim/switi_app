import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
import { useGoFirstProfile, useGoSignIn } from '../../util/navigationHooks';
import BasicHeader from '../../Component/basicHeader';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const SignUp = () => {
  const [radio, setRadio] = useState(0);
  const goLogin = useGoSignIn();
  const goFirstProfile = useGoFirstProfile();
  const radio_props = [
    { label: '남', value: 0 },
    { label: '여', value: 1 },
  ];
  return (
    <SafeAreaView style={styles.wrap}>
      <BasicHeader title="회원가입" />
      <View style={styles.container}>
        <Text style={styles.title}>성별</Text>
        <RadioForm formHorizontal={true}>
          {radio_props.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i}>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={radio === i}
                buttonInnerColor={'#D1D1D1'}
                buttonOuterColor={'#D1D1D1'}
                buttonSize={14}
                buttonWrapStyle={{ marginRight: 5, marginBottom: 20 }}
                onPress={(v) => {
                  setRadio(v);
                  console.log(i);
                }}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelStyle={{ fontSize: 12, color: '#2B2B2B' }}
                labelWrapStyle={{ marginRight: 20, marginBottom: 20 }}
              />
            </RadioButton>
          ))}
        </RadioForm>

        <Text style={styles.title}>닉네임</Text>
        <Text style={styles.title}>이메일</Text>
        <Text style={styles.title}>
          비밀번호 (8자리 이상 영문, 숫자, 특수문자)
        </Text>
        <Text style={styles.title}>비밀번호 확인</Text>
        <Text onPress={goLogin}>로그인하기</Text>
        <Button title="가입하기" onPress={goFirstProfile} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    margin: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 12,
    color: '#B4B4B4',
    marginBottom: 10,
  },
});

export default SignUp;
