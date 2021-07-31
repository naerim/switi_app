import * as React from 'react';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import RootNavigator from './Screen/Navigator';

const Fonts = () => {
  Font.loadAsync({
    'NotoSans': require('./assets/fonts/NotoSans-Regular.ttf'),
    'NotoSans-Light': require('./assets/fonts/NotoSans-Light.ttf'),
    'NotoSans-Bold': require('./assets/fonts/NotoSans-Bold.ttf'),
    'NotoSans-SemiBold': require('./assets/fonts/NotoSans-SemiBold.ttf'),
    'NotoSans-Medium': require('./assets/fonts/NotoSans-Medium.ttf'),
  });
};

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

  return <RootNavigator />;
};

export default App;
