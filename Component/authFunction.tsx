import { Alert } from 'react-native';
import axios from 'axios';
import { HostURL } from '../redux/url';

export const emailCheck = (email: string) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email === '') {
    Alert.alert('이메일 주소를 입력해주세요');
    return false;
  } else if (!email.includes('@') || !email.includes('.')) {
    Alert.alert('이메일 주소가 잘못되었습니다.');
    return false;
  } else if (!emailRegex.test(email)) {
    Alert.alert('이메일 주소가 잘못되었습니다. ');
    return false;
  } else return true;
};

export const passwordCheck = (password: string) => {
  if (password === '') {
    Alert.alert('비밀번호를 입력해 주세요. ');
    return false;
  } else if (password.length < 8 || password.length > 16) {
    Alert.alert('비밀번호가 잘못 입력되었습니다. ');
    return false;
  } else return true;
};

export const getNumber = async (email: string) => {
  if (emailCheck(email)) {
    axios({
      method: 'post',
      url: `${HostURL}/auth/findPwd`,
      data: { email: email },
    })
      .then((res) => {
        Alert.alert('이메일 전송 완료');
      })
      .catch((err) => {
        if (err.toString() == 'Error: Request failed with status code 404')
          Alert.alert('존재하지 않는 이메일 입니다');
        else Alert.alert('인증번호 전송 오류 :(');
      });
  }
};
