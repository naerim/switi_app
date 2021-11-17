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

export const useGoFirstProfile = (nickname: string) => {
  const navigation = useNavigation();
  return useCallback(
    () => navigation.navigate('firstProfile', { nickname: nickname }),
    [nickname, navigation]
  );
};

export const useGoSecondProfile = (
  nickname: string,
  age: string,
  area: number[],
  interest: number[]
) => {
  const navigation = useNavigation();
  return useCallback(
    () =>
      navigation.navigate('secondProfile', {
        nickname: nickname,
        age: age,
        area: area,
        interest: interest,
      }),
    [nickname, age, area, interest, navigation]
  );
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

export const UseGoNoticeDetail = (idx: number) => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('NoticeDetail', { idx: idx }), [
    navigation,
  ]);
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

export const useGoCertification = (email: string) => {
  const navigation = useNavigation();
  return useCallback(
    () => navigation.navigate('certification', { email: email }),
    [navigation, email]
  );
};

export const useGoRenewPassword = (email: string) => {
  const navigation = useNavigation();
  return useCallback(
    () => navigation.navigate('renewPassword', { email: email }),
    [navigation, email]
  );
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

export const useGoEvaluation = (
  studyId: number | undefined,
  memberId: number | undefined,
  title: string | undefined
) => {
  const navigation = useNavigation();
  return useCallback(
    () =>
      navigation.navigate('Evaluation', {
        studyId: studyId,
        memberId: memberId,
        title: title,
      }),
    [navigation, studyId, memberId, title]
  );
};

// prev - 0 : 이전페이지가 스터디 관리페이지 모집글일때(스터디원 탈퇴시키기 가능)
export const useGoProfileDetail = (
  idx: number,
  studyId: number,
  prev: number
) => {
  const navigation = useNavigation();
  return useCallback(
    () =>
      navigation.navigate('ProfileDetail', {
        idx: idx,
        studyId: studyId,
        prev: prev,
      }),
    [navigation, idx, studyId, prev]
  );
};
