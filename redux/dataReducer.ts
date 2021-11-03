import produce from 'immer';
import axios from 'axios';

export const GET_INTEREST = 'GET_INTEREST';
export const GET_CHARACTER = 'GET_CHARACTER';
export const GET_REGION = 'GET_REGION';
export const GET_STATE = 'GET_STATE';

// 성격
export const getCharacterRequest = () => {
  return async (dispatch: any) => {
    const response = await axios.get(
      `http://localhost:4000/category/character`
    );
    if (response.data) {
      dispatch({
        type: GET_CHARACTER,
        payload: response.data.category,
      });
    } else {
      console.log('Unable to fetch data');
    }
  };
};

export const getStateRequest = () => {
  return async (dispatch: any) => {
    const response = await axios.get(`http://localhost:4000/category/state`);
    if (response.data) {
      dispatch({
        type: GET_STATE,
        payload: response.data.category,
      });
    } else {
      console.log('Unable to fetch data');
    }
  };
};

// 관심분야
export const getInterestRequest = () => {
  return async (dispatch: any) => {
    const response = await axios.get(`http://localhost:4000/category/interest`);
    if (response.data) {
      dispatch({
        type: GET_INTEREST,
        payload: response.data.category,
      });
    } else {
      console.log('Unable to fetch data');
    }
  };
};

// 지역
export const getRegionRequest = () => {
  return async (dispatch: any) => {
    const response = await axios.get(`http://localhost:4000/category/region`);
    if (response.data) {
      dispatch({
        type: GET_REGION,
        payload: response.data.category,
      });
    } else {
      console.log('Unable to fetch data');
    }
  };
};

const initialState = {
  interest: null,
  character: null,
  region: null,
  state: null,
};

export interface IDataState {
  interest: any;
  character: any;
  region: any;
  state: any;
}

function dataReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_INTEREST:
        draft.interest = action.payload;
        break;
      case GET_CHARACTER:
        draft.character = action.payload;
        break;
      case GET_REGION:
        draft.region = action.payload;
        break;
      case GET_STATE:
        draft.state = action.payload;
        break;
      default:
        break;
    }
  });
}

export default dataReducer;
