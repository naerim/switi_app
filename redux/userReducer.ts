import produce from 'immer';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  GET_MY_PAGE, GET_MY_PAGE_FAILURE, GET_MY_PAGE_SUCCESS,
} from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

// 로그인 요청
const login = async (email: string, password: string) => {
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

// 마이페이지 정보 불러오기 ( 당도, 스크랩수, 닉네임, 프로필사진)
const getMyPage = async (token: string) => {
  const response = axios({
    method: 'get',
    url: `http://localhost:4000/user/myPage`,
    headers: { Authorization: token },
  });

  return response;
};
export const getMyPageRequest = createRequestThunk(GET_MY_PAGE, getMyPage);

const initialState = {
  login: null,
  loginError: null,
  myPage: null,
  myPageError: null,
};

export interface IUserState {
  login: any;
  loginError: any;
  myPage: any;
  myPageError: any;
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
      case GET_MY_PAGE_SUCCESS:
        draft.myPage = action.payload;
        break;
      case GET_MY_PAGE_FAILURE:
        draft.myPageError = action.payload;
        break;
      default:
        break;
    }
  });
}

export default userReducer;
