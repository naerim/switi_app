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
import MyPage_Profile from './MyPage_Profile';
import MyPage_UserInfo from './MyPage_UserInfo';
import MyPage_Withdrawal from './MyPage_Withdrawal';
import Terms from './Terms';
import EmailAuth from './ResetPassword/emailAuth';
import Certification from './ResetPassword/certification';
import RenewPassword from './ResetPassword/renewPassword';
import Alarm from './Alarm';
import MyPage_FixUserInfo from './MyPage_FixUserInfo';
import HomeIcon from '../Img/menu_home.png';
import HomeTintIcon from '../Img/menu_home_tint.png';
import StudyIcon from '../Img/menu_study.png';
import StudyTintIcon from '../Img/menu_study_tint.png';
import SearchIcon from '../Img/menu_search.png';
import SearchTintIcon from '../Img/menu_search_tint.png';
import MyPageIcon from '../Img/menu_mypage.png';
import MyPageTintIcon from '../Img/menu_mypage_tint.png';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import HomeContainer from '../Component/HomeContainer';
import StudyDetail from './StudyDetail';
import AddStudy from './AddStudy';
import Notice from './Notice';
import MyPage_Profile_Fix from './MyPage_Profile_Fix';
import MyPage_Scrap from './MyPage_Scrap';
import MyPage_Participation from './MyPage_Participation';

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
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MyPage" component={MyPage} />
      <Stack.Screen name="MyPage_Profile" component={MyPage_Profile} />
      <Stack.Screen name="MyPage_Profile_Fix" component={MyPage_Profile_Fix} />
      <Stack.Screen name="MyPage_UserInfo" component={MyPage_UserInfo} />
      <Stack.Screen name="Alarm" component={Alarm} />
      <Stack.Screen name="Notice" component={Notice} />
      <Stack.Screen name="MyPage_Withdrawal" component={MyPage_Withdrawal} />
      <Stack.Screen name="MyPage_FixUserInfo" component={MyPage_FixUserInfo} />
      <Stack.Screen name="MyPage_Scrap" component={MyPage_Scrap} />
      <Stack.Screen
        name="MyPage_Participation"
        component={MyPage_Participation}
      />
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
  <HomeContainer>
    <MaterialTopTab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: '#86E3C3',
        },
      }}
    >
      <MaterialTopTab.Screen
        name="오프라인"
        component={Home}
        initialParams={{ idx: 1 }}
      />
      <MaterialTopTab.Screen
        name="온라인"
        component={Home}
        initialParams={{ idx: 0 }}
      />
    </MaterialTopTab.Navigator>
  </HomeContainer>
);

const TabNavigation = () => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
  >
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#4FD5A7',
        inactiveTintColor: '#b4b4b4',
        style: { height: 60, paddingBottom: 7 },
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
  </SafeAreaView>
);

const MainNavigation = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Switi" component={TabNavigation} />
    <Stack.Screen name="StudyDetail" component={StudyDetail} />
    <Stack.Screen name="AddStudy" component={AddStudy} />
    <Stack.Screen name="Alarm" component={Alarm} />
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
