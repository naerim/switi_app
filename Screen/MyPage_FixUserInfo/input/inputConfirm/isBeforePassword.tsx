import React from 'react';
import { Status } from '../../../SignUp/inteface';

const IsBeforePassword = (beforePwd: string, realBeforePwd: string) => {
  if (beforePwd == '') {
    return { status: Status.NORMARL, text: '필수 정보입니다.' };
  } else if (beforePwd === realBeforePwd) {
    return { status: Status.SUCCESS, text: ' ' };
  } else {
    return { status: Status.ERROR, text: '비밀번호가 틀렸습니다. ' };
  }
};

export default IsBeforePassword;
