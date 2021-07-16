import produce from 'immer';
import { GET_STUDY_LIST } from './action';
import axios from 'axios';
const STUDY_LIST_URL = '/study/studyList/0';

// 온라인,오프라인,최신순,인기순 정렬 추가하기
export const studyListRequest = (onOff: number) => {
  return async (dispatch: any) => {
    const response = await axios.get(
      `http://localhost:4000/study/studyList/${onOff}?order=update`
    );
    if (response.data) {
      dispatch({
        type: GET_STUDY_LIST,
        payload: response.data.study,
      });
    } else {
      console.log('Unable to fetch data');
    }
  };
};

const initialSate = {
  studyList: null,
};

export interface IStudyState {
  studyList: any;
}

function studyReducer(state = initialSate, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_STUDY_LIST:
        return {
          ...state,
          studyList: action.payload,
        };
        break;
      default:
        break;
    }
  });
}

export default studyReducer;
