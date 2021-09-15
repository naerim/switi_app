import produce from 'immer';
import { AUTH_LOGIN, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS } from './action';
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

const initialState = {
  login: null,
  user: null,
  loginError: null,
};

export interface IUserState {
  user: [];
  login: any;
  loginError: any;
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
      default:
        break;
    }
  });
}

export default userReducer;
