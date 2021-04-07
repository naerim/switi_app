import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styled from 'styled-components/native';
import CameraIcon from './camera.png';

const ImagePickerContainer = () => {
  const [image, setImage] = useState(
    'https://github.com/purplecode-team/switi_app/blob/feature/mypage/Screen/MyPage_FixUserInfo/image/profile.png?raw=true'
  );

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <Container style={{}}>
      <PictureContainer onPress={pickImage}>
        <UserImage
          source={{
            uri: image,
          }}
        />
        <CameraImage source={CameraIcon} />
      </PictureContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const PictureContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 40px;
`;

const CameraImage = styled.Image`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export default ImagePickerContainer;
