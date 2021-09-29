import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import studyReducer, { IStudyState } from './studyReducer';
import userReducer, { IUserState } from './userReducer';
import dataReducer, { IDataState } from './dataReducer';

export interface rootState {
  studyReducer: IStudyState;
  userReducer: IUserState;
  dataReducer: IDataState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({ studyReducer, userReducer, dataReducer });

export default persistReducer(persistConfig, rootReducer);
