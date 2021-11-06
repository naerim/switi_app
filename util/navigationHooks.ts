import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

// 뒤로가기
export const useGoBack = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.goBack(), [navigation]);
};

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
  return useCallback(() => navigation.navigate('MyPage_Notice'), [navigation]);
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
    idx,
  ]);
};

export const useGoAmendStudy = (idx: number) => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('AmendStudy', { idx: idx }), [
    navigation,
    idx,
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

export const useGoManagement = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('Management'), [navigation]);
};

export const useGoManageProceeding = (idx: number, title: string) => {
  const navigation = useNavigation();
  return useCallback(
    () => navigation.navigate('ManageProceeding', { idx: idx, title: title }),
    [navigation, idx, title]
  );
};

export const useGoManageRecruit = (idx: number, title: string) => {
  const navigation = useNavigation();
  return useCallback(
    () => navigation.navigate('ManageRecruit', { idx: idx, title: title }),
    [navigation, idx, title]
  );
};

export const useGoProfileDetail = (idx: number) => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('ProfileDetail', { idx: idx }), [
    navigation,
    idx,
  ]);
};
