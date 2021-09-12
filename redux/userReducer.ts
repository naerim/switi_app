import produce from 'immer';
import {
  AUTH_LOGIN, AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNUP,
  AUTH_SIGNUP_SUCCESS,
  CHECK_NICKNAME,
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

// 로그인
export const loginRequest = createRequestThunk(AUTH_LOGIN, login);

// 회원가입
export const signupRequest = (
  gender: number,
  nickname: string,
  email: string,
  password: string
) => createRequestThunk(AUTH_SIGNUP, signup(gender, nickname, email, password));

// 닉네임 중복 확인
export const checkNickNameRequest = (nickname: string) => {
  // const response = axios
  //   .post(`http://localhost:4000/auth/checkNickname`, { nickname: nickname })
  //   .then((response) => response.data)
  //   .then((response) => console.log(response.data));
  //
  // return {
  //   type: CHECK_NICKNAME,
  //   payload: response,
  // };
  // try {
  // return async (dispatch: any) => {
  //   const response = await axios.post(
  //     `http://localhost:4000/auth/checkNickname`,
  //     nickname
  //   );
  //   if (response.data) {
  //     dispatch({
  //       type: CHECK_NICKNAME,
  //       payload: response.data,
  //     });
  //   } else {
  //     console.log('Unable to check user nickName');
  //   }
  // };
  // } catch (e) {
  //   console.log(e);
  // }
};

// 회원가입 요청
const signup = (
  gender: number,
  nickname: string,
  email: string,
  password: string
) => {
  axios({
    method: 'post',
    url: 'http://localhost:4000/auth/signup',
    data: {
      gender: gender,
      nickname: nickname,
      email: email,
      password: password,
    },
  });
};
const initialState = {
  nickname: '',
  login: null,
  user: null,
  signupSuccess: null,
  loginError: null,
};

export interface IUserState {
  nickname: string;
  user: [];
  login: any;
  signupSuccess: any;
  loginError: any;
}

function userReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case CHECK_NICKNAME:
        return {
          ...state,
          nickname: action.payload,
        };
        break;
      case AUTH_LOGIN_SUCCESS:
        draft.login = action.payload;
        break;
      case AUTH_SIGNUP_SUCCESS:
        draft.signupSuccess = action.payload;
        break;
      case AUTH_LOGIN_FAILURE:
        draft.loginError = action.payload;
        break;
      default:
        break;
    }
  });
}

export default userReducer;
