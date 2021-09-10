import produce from 'immer';
import { AUTH_LOGIN, AUTH_LOGIN_SUCCESS, CHECK_NICKNAME } from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

// 로그인
export const loginRequest = (email: string, password: string) =>
  createRequestThunk(AUTH_LOGIN, login(email, password));

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

// 로그인 요청
const login = (email: string, password: string) => {
  axios({
    method: 'post',
    url: 'http://localhost:4000/auth/login',
    data: { email: email, password: password },
  });
};

const initialState = {
  nickname: '',
  login: null,
  user: null,
};

export interface IUserState {
  nickname: string;
  user: [];
  login: any;
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
      default:
        break;
    }
  });
}

export default userReducer;
