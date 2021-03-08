import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './SignIn';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import Search from './Search';
import Management from './Management';
import MyPage from './MyPage';
import SignUp from './SignUp';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

const LoginNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const HomeNavi = () => {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="Offline" component={Home} />
      <MaterialTopTab.Screen name="Online" component={Home} />
    </MaterialTopTab.Navigator>
  );
};

const TabNavi = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNavi"
        component={HomeNavi}
        options={{ tabBarLabel: 'First' }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ tabBarLabel: 'Second' }}
      />
      <Tab.Screen
        name="Management"
        component={Management}
        options={{ tabBarLabel: 'Third' }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{ tabBarLabel: 'Fourth' }}
      />
    </Tab.Navigator>
  );
};

const MainNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavi" component={TabNavi} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const user: Boolean = false;
  return (
    <NavigationContainer>
      {user ? <MainNavi /> : <LoginNavi />}
    </NavigationContainer>
  );
};

export default RootNavigator;
