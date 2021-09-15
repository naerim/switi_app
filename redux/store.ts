// import { persistStore } from 'redux-persist';
import rootReducer from './index';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};

export const store = configureStore();
// export const persistor = persistStore(store);

// export default { store, persistor };
export default { store };
