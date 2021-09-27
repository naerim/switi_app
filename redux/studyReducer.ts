import produce from 'immer';
import {
  GET_ONLINE_STUDY_LIST,
  GET_OFFLINE_STUDY_LIST,
  GET_STUDY_DETAIL_SUCCESS,
  GET_STUDY_DETAIL,
} from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

// 온라인 스터디
export const onlineStudyListRequest = (
  token: string,
  order: boolean,
  query: string
) => {
  const orderValue = order ? 'count' : 'update';
  return async (dispatch: any) => {
    const response = await axios.get(
      `http://localhost:4000/study/studyList/0?order=${orderValue}${query}`,
      { headers: { Authorization: `${token}` } }
    );
    if (response.data) {
      dispatch({
        type: GET_ONLINE_STUDY_LIST,
        payload: response.data.study,
      });
    } else {
      console.log('Unable to fetch data');
    }
  };
};

// 오프라인 스터디
export const offlineStudyListRequest = (
  token: string,
  order: boolean,
  query: string
) => {
  const orderValue = order ? 'count' : 'update';
  return async (dispatch: any) => {
    const response = await axios.get(
      `http://localhost:4000/study/studyList/1?order=${orderValue}${query}`,
      { headers: { Authorization: `${token}` } }
    );
    if (response.data) {
      dispatch({
        type: GET_OFFLINE_STUDY_LIST,
        payload: response.data.study,
      });
    } else {
      console.log('Unable to fetch data');
    }
  };
};

// 스터디 디테일 정보 불러오기
export const getStudyDetail = (token: string, id: number) => {
  const response = axios({
    method: 'get',
    url: `http://localhost:4000/study/studyDetail${id}`,
    headers: { Authorization: token },
  });
  return response;
};
export const getStudyDetailRequest = createRequestThunk(
  GET_STUDY_DETAIL,
  getStudyDetail
);

const initialState = {
  onlineStudyList: null,
  offlineStudyList: null,
  studyDetail: null,
};

export interface IStudyState {
  onlineStudyList: [];
  offlineStudyList: [];
  studyDetail: [];
}

function studyReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_ONLINE_STUDY_LIST:
        draft.onlineStudyList = action.payload;
        break;
      case GET_OFFLINE_STUDY_LIST:
        draft.offlineStudyList = action.payload;
        break;
      case GET_STUDY_DETAIL_SUCCESS:
        draft.studyDetail = action.payload;
        break;
      default:
        break;
    }
  });
}

export default studyReducer;
