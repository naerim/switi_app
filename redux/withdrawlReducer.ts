import produce from 'immer';
import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_SEARCH_HISTORY_SUCCESS,
  DELETE_ALL_SEARCH_HISTORY_SUCCESS,
} from './action';
import axios from 'axios';
import createRequestThunk from '../lib/createRequestThunk';
import { brown50 } from 'react-native-paper/lib/typescript/styles/colors';
import { searchAllDelete, searchDelete } from './search/search.api';
import searchReducer from './search/searchReducer';

export interface IWithdrawalState {
  withdrawalSuccess: boolean;
}

const initialState = {
  withdrawalSuccess: false,
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
};

function withdrawalReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case DELETE_USER_SUCCESS:
        draft.withdrawalSuccess = true;
        break;
      case DELETE_USER_FAILURE:
        draft.withdrawalSuccess = false;
        break;
      default:
        break;
    }
  });
}

export default withdrawalReducer;
