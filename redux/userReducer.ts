import produce from 'immer';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNUP,
  AUTH_SIGNUP_FAILURE,
  AUTH_SIGNUP_SUCCESS,
} from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

// 로그인 요청
const login = async (email: string, password: string) => {
  // 여기 콘솔은 잘 찍히는데,
  //[Unhandled promise rejection: Error: Request failed with status cde 500]
  //백엔드 에러발생
  console.log(email, password);
  const response = await axios({
    method: 'post',
    url: 'http://localhost:4000/auth/login',
    data: { email: email, password: password },
  });

  return response;
};

// 회원가입 요청
const signup = async (
  gender: number,
  nickname: string,
  email: string,
  password: string
) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:4000/auth/signup',
    data: {
      gender: gender,
      nickname: nickname,
      email: email,
      password: password,
    },
  });
  return response;
};

// 로그인
export const loginRequest = createRequestThunk(AUTH_LOGIN, login);
// 회원가입
export const signupRequest = createRequestThunk(AUTH_SIGNUP, signup);

const initialState = {
  login: null,
  user: null,
  loginError: null,
  signup: null,
  signupError: null,
};

export interface IUserState {
  user: [];
  login: any;
  loginError: any;
  signup: any;
  signupError: null;
}

function userReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case AUTH_LOGIN_SUCCESS:
        draft.login = action.payload;
        break;
      case AUTH_LOGIN_FAILURE:
        draft.loginError = action.payload;
        break;
      case AUTH_SIGNUP_SUCCESS:
        draft.signup = action.payload;
        break;
      case AUTH_SIGNUP_FAILURE:
        draft.signupError = action.payload;
        break;
      default:
        break;
    }
  });
}

export default userReducer;
