import React from 'react';
import { Status } from '../../../SignUp/inteface';

const IsSamePassword = (pwd: string, checkPwd: string) => {
  if (checkPwd == null || checkPwd == '') {
    return { status: Status.NORMARL, text: '필수 정보입니다.' };
  } else if (pwd === checkPwd) {
    return { status: Status.SUCCESS, text: ' ' };
  } else {
    return { status: Status.ERROR, text: '비밀번호가 일치하지 않습니다.' };
  }
};

export default IsSamePassword;
