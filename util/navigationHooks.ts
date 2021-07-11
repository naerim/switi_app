import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export const useGoSignIn = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('SignIn'), [navigation]);
};

export const useGoSignUp = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('SignUp'), [navigation]);
};

export const useGoFirstProfile = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('firstProfile'), [navigation]);
};

export const useGoSecondProfile = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('secondProfile'), [navigation]);
};

export const useGoMyPageProfile = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('MyPage_Profile'), [navigation]);
};

export const useGoMypageProfileFix = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('MyPage_Profile_Fix'), [
    navigation,
  ]);
};

export const useGoMyPageUserInfo = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('MyPage_UserInfo'), [
    navigation,
  ]);
};

export const useGoMyPage = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('MyPage'), [navigation]);
};

export const UseGoWithdrawal = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('MyPage_Withdrawal'), [
    navigation,
  ]);
};

export const UseGoFixUserInfo = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('MyPage_FixUserInfo'), [
    navigation,
  ]);
};

export const UseGoAlarm = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('Alarm'), [navigation]);
};

export const UseGoNotice = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('Notice'), [navigation]);
};

export const UseGoScrap = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('MyPage_Scrap'), [navigation]);
};

export const UseGoParticipation = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('MyPage_Participation'), [
    navigation,
  ]);
};

export const useGoTerms = (idx: number) => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('Terms', { idx: idx }), [
    navigation,
  ]);
};

export const useGoEmailAuth = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('emailAuth'), [navigation]);
};

export const useGoCertification = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('certification'), [navigation]);
};

export const useGoRenewPassword = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('renewPassword'), [navigation]);
};

export const useGoStudyDetail = (idx: number) => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('StudyDetail', { idx: idx }), [
    navigation,
  ]);
};

export const useGoHome = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('Switi'), [navigation]);
};

export const useGoAddStudy = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('AddStudy'), [navigation]);
};
