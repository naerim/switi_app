import produce from 'immer';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  GET_MY_PAGE,
  GET_MY_PAGE_FAILURE,
  GET_MY_PAGE_SUCCESS,
  GET_MY_PROFILE,
  GET_MY_PROFILE_FAILURE,
  GET_MY_PROFILE_SUCCESS,
  GET_SCRAP_LIST,
  GET_SCRAP_LIST_FAILURE,
  GET_SCRAP_LIST_SUCCESS,
  GET_STUDY_HISTORY,
  GET_STUDY_HISTORY_FAILURE,
  GET_STUDY_HISTORY_SUCCESS,
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILURE,
} from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

// 로그인
const login = async (email: string, password: string) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:4000/auth/login',
    // url: 'http://10.0.2.2:4000/auth/login',
    data: { email: email, password: password },
  });
  console.log('아이디, 비번', email, password);
  return response;
};
export const loginRequest = createRequestThunk(AUTH_LOGIN, login);

// 로그아웃
export const logout = () => ({
  type: AUTH_LOGOUT,
});
export const logoutRequest = createRequestThunk(AUTH_LOGOUT, logout);

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

// 스크랩 리스트 불러오기
const getScrapList = async (token: string) => {
  const response = axios({
    method: 'get',
    url: `http://localhost:4000/user/scrapList`,
    headers: { Authorization: token },
  });
  return response;
};
export const getScrapListRequest = createRequestThunk(
  GET_SCRAP_LIST,
  getScrapList
);

// 스터디 참여이력 불러오기
const getStudyHistory = async (token: string) => {
  const response = axios({
    method: 'get',
    url: `http://localhost:4000/user/studyHistory`,
    headers: { Authorization: token },
  });
  return response;
};
export const getStudyHistoryRequest = createRequestThunk(
  GET_STUDY_HISTORY,
  getStudyHistory
);

// 내 프로필
const getMyProfile = async (token: string) => {
  const response = axios({
    method: 'get',
    url: `http://localhost:4000/user/myProfile`,
    headers: { Authorization: token },
  });
  return response;
};
export const getMyProfileRequest = createRequestThunk(
  GET_MY_PROFILE,
  getMyProfile
);

// 상대 프로필
const getUserProfile = async (token: string, id: number) => {
  const response = axios({
    method: 'get',
    url: `http://localhost:4000/user/userProfile/${id}`,
    headers: { Authorization: token },
  });
  return response;
};
export const getUserProfileRequest = createRequestThunk(
  GET_USER_PROFILE,
  getUserProfile
);

const initialState = {
  login: null,
  loginError: null,
  myPage: null,
  myPageError: null,
  scrapList: null,
  scrapListError: null,
  studyHistory: null,
  studyHistoryError: null,
  myProfile: null,
  myProfileError: null,
  userProfile: null,
  userProfileError: null,
  logoutError: false,
  logoutDone: false,
};

export interface IUserState {
  login: any;
  loginError: any;
  myPage: any;
  myPageError: any;
  scrapList: any;
  scrapListError: any;
  studyHistory: any;
  studyHistoryError: any;
  myProfile: any;
  myProfileError: any;
  userProfile: any;
  userProfileError: any;
  logoutError: boolean;
  logoutDone: boolean;
}

function userReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case AUTH_LOGIN:
        draft.loginError = initialState.loginError;
        break;
      case AUTH_LOGIN_SUCCESS:
        draft.login = action.payload;
        break;
      case AUTH_LOGIN_FAILURE:
        draft.loginError = action.payload;
        break;
      case AUTH_LOGOUT_SUCCESS:
        draft.logoutDone = true;
        draft.login = null;
        break;
      case AUTH_LOGOUT_FAILURE:
        draft.logoutDone = false;
        draft.logoutError = true;
        break;
      case GET_MY_PAGE:
        draft.myPageError = initialState.myPageError;
        break;
      case GET_MY_PAGE_SUCCESS:
        draft.myPage = action.payload;
        break;
      case GET_MY_PAGE_FAILURE:
        draft.myPageError = action.payload;
        break;

      case GET_SCRAP_LIST:
        draft.scrapListError = initialState.scrapListError;
        break;
      case GET_SCRAP_LIST_SUCCESS:
        draft.scrapList = action.payload;
        break;
      case GET_SCRAP_LIST_FAILURE:
        draft.scrapListError = action.payload;
        break;

      case GET_STUDY_HISTORY:
        draft.studyHistoryError = initialState.studyHistoryError;
        break;
      case GET_STUDY_HISTORY_SUCCESS:
        draft.studyHistory = action.payload;
        break;
      case GET_STUDY_HISTORY_FAILURE:
        draft.studyHistoryError = action.payload;
        break;

      case GET_MY_PROFILE:
        draft.myProfileError = initialState.myProfileError;
        break;
      case GET_MY_PROFILE_SUCCESS:
        draft.myProfile = action.payload;
        break;
      case GET_MY_PROFILE_FAILURE:
        draft.myProfileError = action.payload;
        break;

      case GET_USER_PROFILE:
        draft.userProfile = initialState.userProfile;
        break;
      case GET_USER_PROFILE_SUCCESS:
        draft.userProfile = action.payload.userProfile;
        break;
      case GET_USER_PROFILE_FAILURE:
        draft.userProfileError = action.payload.userProfileError;
        break;
      default:
        break;
    }
  });
}

export default userReducer;
