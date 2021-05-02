import React from 'react';
import { Status } from '../../../SignUp/inteface';

const IsPassword = (pwd: string) => {
  if (pwd == '' || pwd == null) {
    return { status: Status.NORMARL, text: '필수 정보입니다.' };
  } else if (
    !/[0-9]/.test(pwd) ||
    !/[a-zA-Z]/.test(pwd) ||
    !/[~!@#$%<>^&*]/.test(pwd) ||
    pwd.length < 8 ||
    pwd.length > 16
  ) {
    return {
      status: Status.ERROR,
      text: '8~16문자 영문, 숫자, 특수문자를 사용하세요.',
    };
  } else {
    return { status: Status.SUCCESS, text: ' ' };
  }
};

export default IsPassword;
