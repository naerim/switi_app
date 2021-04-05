import React, { useState, useEffect } from 'react';
import { Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styled from 'styled-components/native';

export default function ImagePickerContainer() {
  const [image, setImage] = useState(null);

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
    let result = await ImagePicker.launchImageLibraryAsync({
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PictureContainer onPress={pickImage}>
        {/*기본이미지*/}
        {/*삽입이미지*/}
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: 68, height: 68, borderRadius: 40 }}
          />
        ) : (
          <UserImage source={require('./profile.png')} />
        )}
      </PictureContainer>
    </View>
  );
}

const PictureContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 40px;
`;
