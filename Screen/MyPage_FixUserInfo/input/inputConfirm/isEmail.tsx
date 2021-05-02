import React from 'react';
import { Status } from '../../../SignUp/inteface';

const IsEmail = (email: string) => {
  const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if (email == '' || email == null) {
    return { status: Status.NORMARL, text: '필수 정보입니다.' };
  } else if (!regex.test(email)) {
    return { status: Status.ERROR, text: '이메일 형식이 올바르지 않습니다.' };
  } else {
    return { status: Status.SUCCESS, text: ' ' };
  }
};

export default IsEmail;
