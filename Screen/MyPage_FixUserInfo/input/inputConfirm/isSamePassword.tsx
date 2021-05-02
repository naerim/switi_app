import React from 'react';
import { Status } from '../../../SignUp/inteface';

const IsSamePassword = (
  pwd: { value: string },
  checkPwd: { value: string }
) => {
  if (checkPwd.value == null) {
    return { status: Status.NORMARL, text: '필수 정보입니다.' };
  } else if (pwd.value === checkPwd.value) {
    return { status: Status.SUCCESS, text: ' ' };
  } else {
    return { status: Status.ERROR, text: '비밀번호가 일치하지 않습니다.' };
  }
};

export default IsSamePassword;
