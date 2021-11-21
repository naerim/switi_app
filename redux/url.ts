// ios
import { Platform } from 'react-native';

//export const HostURL = 'http://localhost:4000';
//android
// export const HostURL = 'http://10.0.2.2:4000';

export const HostURL =
  Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000';
