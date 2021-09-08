import produce from 'immer';
import { CHECK_NICKNAME } from './action';
// import axios from 'axios';

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

const initialState = {
  nickname: '',
  user: null,
};

export interface IUserState {
  nickname: string;
  user: [];
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
      default:
        break;
    }
  });
}

export default userReducer;
