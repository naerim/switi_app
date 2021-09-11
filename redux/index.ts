import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import studyReducer, { IStudyState } from './studyReducer';
import userReducer, { IUserState } from './userReducer';

export interface rootState {
  studyReducer: IStudyState;
  userReducer: IUserState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({ studyReducer, userReducer });

export default persistReducer(persistConfig, rootReducer);
