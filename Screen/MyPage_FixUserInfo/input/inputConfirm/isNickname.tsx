import { Status } from '../../../SignUp/inteface';

const IsNickname = (nickname: string) => {
  const special = /[~!@#$%^&*()_+|<>?:{}]/;
  if (nickname == '' || nickname == null) {
    return { status: Status.NORMARL, text: '필수 정보입니다.' };
  } else if (special.test(nickname) || nickname.search(/\s/) != -1) {
    return {
      status: Status.ERROR,
      text: '공백, 특수문자는 사용 불가합니다.',
    };
  } else {
    return { status: Status.SUCCESS, text: '멋진 닉네임이네요!' };
  }
};

export default IsNickname;
