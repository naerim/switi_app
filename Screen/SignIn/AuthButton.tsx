import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
//import constants from 'constants';
import { ActivityIndicator } from 'react-native';

const Touchable = styled.TouchableOpacity``;

const LoginButtonText = styled.Text`
  color: white;
  font-size: 12px;
`;

const Container = styled.View`
  width: 100%;
  background-color: #b4b4b4;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0px 50px;
`;

const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

//@ts-ignore
const AuthButton = ({ text, onPress, loading = false }) => (
  <Touchable disabled={loading} onPress={onPress}>
    <Container>
      {loading ? <ActivityIndicator color={'white'} /> : <Text>{text}</Text>}
    </Container>
  </Touchable>
);

AuthButton.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default AuthButton;
