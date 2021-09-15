import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { useFonts } from 'expo-font';
import RootNavigator from './Screen/Navigator';

const App = () => {
  const [loaded] = useFonts({
    'NotoSans': require('./assets/fonts/NotoSans-Regular.ttf'),
    'NotoSans-Light': require('./assets/fonts/NotoSans-Light.ttf'),
    'NotoSans-Bold': require('./assets/fonts/NotoSans-Bold.ttf'),
    'NotoSans-SemiBold': require('./assets/fonts/NotoSans-SemiBold.ttf'),
    'NotoSans-Medium': require('./assets/fonts/NotoSans-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      {/*<PersistGate persistor={persistor}>*/}
      <RootNavigator />
      {/*</PersistGate>*/}
    </Provider>
  );
};

export default App;
