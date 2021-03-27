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
import FirstProfile from './Profile/firstProfile';
import SecondProfile from './Profile/secondProfile';
import MyPage_profile from './MyPage_profile';
import UserInfo from './UserInfo';
import Terms from './Terms';
import EmailAuth from './ResetPassword/emailAuth';
import Certification from './ResetPassword/certification';
import RenewPassword from './ResetPassword/renewPassword';
import HomeIcon from '../Img/menu_home.png';
import HomeTintIcon from '../Img/menu_home_tint.png';
import StudyIcon from '../Img/menu_study.png';
import StudyTintIcon from '../Img/menu_study_tint.png';
import SearchIcon from '../Img/menu_search.png';
import SearchTintIcon from '../Img/menu_search_tint.png';
import MyPageIcon from '../Img/menu_mypage.png';
import MyPageTintIcon from '../Img/menu_mypage_tint.png';
import styled from 'styled-components/native';
import { Platform, SafeAreaView } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

const LoginNavigation = () => (
  <Stack.Navigator
    mode="modal"
    headerMode="none"
    screenOptions={{ animationEnabled: false }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Terms" component={Terms} />
    <Stack.Screen name="firstProfile" component={ProfileNavigation} />
    <Stack.Screen name="emailAuth" component={ResetPasswordNavigation} />
  </Stack.Navigator>
);

function MyPageNavigator() {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
    >
      <Stack.Screen name="MyPage" component={MyPage} />
      <Stack.Screen name="MyPage_profile" component={MyPage_profile} />
      <Stack.Screen name="UserInfo" component={UserInfo} />
    </Stack.Navigator>
  );
}

const ProfileNavigation = () => (
  <Stack.Navigator
    mode="modal"
    headerMode="none"
    screenOptions={{ animationEnabled: false }}
  >
    <Stack.Screen name="firstProfile" component={FirstProfile} />
    <Stack.Screen name="secondProfile" component={SecondProfile} />
  </Stack.Navigator>
);

const ResetPasswordNavigation = () => (
  <Stack.Navigator
    mode="modal"
    headerMode="none"
    screenOptions={{ animationEnabled: false }}
  >
    <Stack.Screen name="emailAuth" component={EmailAuth} />
    <Stack.Screen name="certification" component={Certification} />
    <Stack.Screen name="renewPassword" component={RenewPassword} />
  </Stack.Navigator>
);

const HomeNavigation = () => (
  <MaterialTopTab.Navigator>
    <MaterialTopTab.Screen name="오프라인" component={Home} />
    <MaterialTopTab.Screen name="온라인" component={Home} />
  </MaterialTopTab.Navigator>
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#4FD5A7',
        inactiveTintColor: '#b4b4b4',
      }}
    >
      <Tab.Screen
        name="HomeNavi"
        component={HomeNavigation}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ focused }) => (
            <Icon source={focused ? HomeTintIcon : HomeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '검색',
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <Icon source={focused ? SearchTintIcon : SearchIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Management"
        component={Management}
        options={{
          tabBarLabel: '스터디 관리',
          tabBarIcon: ({ focused }) => (
            <Icon source={focused ? StudyTintIcon : StudyIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageNavigator}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({ focused }) => (
            <Icon source={focused ? MyPageTintIcon : MyPageIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigation = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Switi" component={TabNavigation} />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const user = true;
  return (
    <NavigationContainer>
      {user ? <MainNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
};

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

export default RootNavigator;
