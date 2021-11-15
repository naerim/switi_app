import produce from 'immer';
import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_SEARCH_HISTORY_SUCCESS,
  DELETE_ALL_SEARCH_HISTORY_SUCCESS,
  POST_FIND_PWD,
  POST_FIND_PWD_SUCCESS,
  POST_FIND_PWD_FAILURE,
  POST_STUDY_LIST,
  GET_SEARCH_HISTORY_LIST,
} from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

export interface IWithdrawalState {
  withdrawalSuccess: boolean;
  findPwdSuccess: boolean;
}

const initialState = {
  withdrawalSuccess: false,
  findPwdSuccess: false,
};

const deleteUser = async (token: string) => {
  const response = await axios({
    method: 'delete',
    url: 'http://localhost:4000/auth/deleteUser',
    headers: { Authorization: token },
  });
  console.log('리듀서 회원 탈퇴', response.data);
  return response;
};

const findPwd = async (email: string) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:4000/auth/findPwd',
    data: { keyword: email },
  });
  console.log(`비밀번호 찾기 ${JSON.stringify(response.data)}`);
  return response;
};

export const deleteUserThunk = (token: string) => async (dispatch: any) => {
  const response = await deleteUser(token);
  if (response.data.result) dispatch({ type: DELETE_USER_SUCCESS });
};

// export const findPwdThunk = (email: string) => async (dispatch: any) => {
//   const response = await findPwd(email);
//   if (response.data.result) dispatch({ type: POST_FIND_PWD_SUCCESS });
// };

export const findPwdThunk = createRequestThunk(POST_FIND_PWD, findPwd);

function withdrawalReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case DELETE_USER_SUCCESS:
        draft.withdrawalSuccess = true;
        break;
      case DELETE_USER_FAILURE:
        draft.withdrawalSuccess = false;
        break;
      case POST_FIND_PWD_SUCCESS:
        draft.findPwdSuccess = true;
        break;
      case POST_FIND_PWD_FAILURE:
        draft.findPwdSuccess = false;
        break;
      default:
        break;
    }
  });
}

export default withdrawalReducer;
