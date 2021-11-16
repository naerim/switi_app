import produce from 'immer';
import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from './action';
import axios from 'axios';

export interface IAuthState {
  withdrawalSuccess: boolean;
  withdrawalError: any;
  findPwdSuccess: boolean;
}

const initialState = {
  withdrawalSuccess: false,
  withdrawalError: null,
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

export const deleteUserThunk = (token: string) => async (dispatch: any) => {
  const response = await deleteUser(token);
  if (response.data.result) dispatch({ type: DELETE_USER_SUCCESS });
  return response.data.result;
};

function authReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case DELETE_USER:
        draft.withdrawalError = initialState.withdrawalError;
        console.log('DELETE_USER', draft.withdrawalError);
        break;
      case DELETE_USER_SUCCESS:
        draft.withdrawalSuccess = true;
        console.log('DELETE_USER_SUCCESS', draft.withdrawalSuccess);
        break;
      case DELETE_USER_FAILURE:
        draft.withdrawalError = action.payload;
        console.log('DELETE_USER_FAILURE', draft.withdrawalError);
        break;
      default:
        break;
    }
  });
}

export default authReducer;
