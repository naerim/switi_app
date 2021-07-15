import { persistStore } from 'redux-persist';
import rootReducer from './index';
import { createStore } from 'redux';

const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export const store = configureStore();
export const persistor = persistStore(store);

export default { store, persistor };
