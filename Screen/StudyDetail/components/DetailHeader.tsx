import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import BackIcon from '../../../Img/btn_back.png';
import MenuIcon from '../../../Img/icon_dont3_black.png';
import { Platform } from 'react-native';
import MenuModal from './MenuModal';
import DeleteModal from './MenuModal/DeleteModal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../redux';
import {
  offlineStudyListRequest,
  onlineStudyListRequest,
} from '../../../redux/studyReducer';
import { useGoAmendStudy, useGoBack } from '../../../util/navigationHooks';
import DeleteDoneModal from './MenuModal/DeleteDoneModal';
import { getMyStudyListRequest } from '../../../redux/manageReducer';
import { HostURL } from '../../../redux/url';

interface Props {
  id: number;
  onPress: () => void;
}

const DetailHeader: React.FC<Props> = ({ id, onPress }) => {
  const goBack = useGoBack();
  const goAmendStudy = useGoAmendStudy(id);
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const showDeleteModal = () => setDeleteModalVisible(true);
  const closeDeleteModal = () => setDeleteModalVisible(false);
  const [DoneModalVisible, setDoneModalVisible] = useState(false);
  const showDoneModal = () => setDoneModalVisible(true);
  const closeDoneModal = () => setDoneModalVisible(false);

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const dispatch = useDispatch();
  const fetchOnlineStudyList = (order: boolean, query: string) =>
    dispatch(onlineStudyListRequest(login.token, order, query));
  const fetchOfflineStudyList = (order: boolean, query: string) =>
    dispatch(offlineStudyListRequest(login.token, order, query));
  const onGetMyStudyList = useCallback(
    (token) => dispatch(getMyStudyListRequest(token)),
    [dispatch]
  );

  const onPressDeleteMenu = () => {
    closeModal();
    setTimeout(() => {
      showDeleteModal();
    }, 500);
  };

  const deleteStudy = () => {
    axios({
      method: 'delete',
      url: `${HostURL}/study/deleteStudy/${id}`,
      headers: { Authorization: login.token },
    })
      .then((res) => {
        closeDeleteModal();
        fetchOnlineStudyList(true, '');
        fetchOfflineStudyList(true, '');
        setTimeout(() => {
          showDoneModal();
        }, 500);
        setTimeout(() => {
          closeDoneModal();
          goBack();
        }, 2000);
        setTimeout(() => {
          onGetMyStudyList(login.token);
        }, 2300);
      })
      .catch((err) => {
        alert('삭제 실패');
      });
  };

  const onPressAmendMenu = () => {
    closeModal();
    goAmendStudy();
  };

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 40 }}>
      <Wrap
        onPress={onPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Icon source={BackIcon} />
      </Wrap>
      <Wrap
        onPress={showModal}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <RightIcon source={MenuIcon} />
      </Wrap>
      <DeleteModal
        modalVisible={deleteModalVisible}
        closeModal={closeDeleteModal}
        onPress={deleteStudy}
      />
      <DeleteDoneModal
        modalVisible={DoneModalVisible}
        closeModal={closeDoneModal}
      />
      <MenuModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onPressDelete={onPressDeleteMenu}
        onPressAmend={onPressAmendMenu}
      />
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  left: 24px;
  right: 24px;
  top: 24px;
`;

const Wrap = styled.TouchableOpacity``;

const Icon = styled.Image`
  width: 18px;
  height: 18px;
`;

const RightIcon = styled.Image`
  width: 16px;
  height: 4px;
`;

export default DetailHeader;
