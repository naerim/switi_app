import produce from 'immer';
import { GET_ONLINE_STUDY_LIST, GET_OFFLINE_STUDY_LIST } from './action';
import axios from 'axios';

// 온라인 스터디
export const onlineStudyListRequest = (
  order: boolean,
  tagList: { key: number; name: string; category: string }[]
) => {
  var tag = '';
  tagList.forEach(({ key, name, category }) => {
    if (category == 'interest') {
      tag += '&category=' + (key + 1).toString();
    } else if (category == 'area') {
      tag += '&area=' + (key + 1).toString();
    }
  });
  const orderValue = order ? 'update' : 'count';
  return async (dispatch: any) => {
    const response = await axios.get(
      `http://localhost:4000/study/studyList/0?order=${orderValue}`
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
  order: boolean,
  tagList: { key: number; name: string; category: string }[]
) => {
  const orderValue = order ? 'update' : 'count';
  return async (dispatch: any) => {
    const response = await axios.get(
      `http://localhost:4000/study/studyList/1?order=${orderValue}`
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

const initialState = {
  onlineStudyList: null,
  offlineStudyList: null,
};

export interface IStudyState {
  onlineStudyList: [];
  offlineStudyList: [];
}

function studyReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_ONLINE_STUDY_LIST:
        return {
          ...state,
          onlineStudyList: action.payload,
        };
        break;
      case GET_OFFLINE_STUDY_LIST:
        return {
          ...state,
          offlineStudyList: action.payload,
        };
        break;
      default:
        break;
    }
  });
}

export default studyReducer;
