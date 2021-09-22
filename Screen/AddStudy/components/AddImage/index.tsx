import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import PlusIcon from '../../../../Img/btn_plus_white.png';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface Props {
  //image: null;
  //setImage: (file: { fieldname: string | undefined; filename: string | undefined; destination: string; encoding: string; uri: string }) => void;
  image: string;
  setImage: (text: string) => void;
}

const AddImage: React.FC<Props> = ({ image, setImage }) => {
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

  // 이미지 선택하는 함수
  // mediaTypes: ImagePicker.MediaTypeOptions.All,
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      // const file = {
      //   uri: result.uri,
      //   filename: result.uri.split('/').pop(),
      //   fieldname: result.uri.split('.').pop(),
      //   encoding: '7bit',
      //   destination: 'images/',
      // };
      // console.log(file);
      // setImage(file);
      setImage(result.uri);
    }
  };

  return (
    <Container activeOpacity={0.8} onPress={pickImage}>
      {image ? (
        <TopImage source={{ uri: image }} />
      ) : (
        <TopImage source={PlusIcon} style={{ width: 45, height: 45 }} />
      )}
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: #e3e3e3;
  align-items: center;
  justify-content: center;
  height: 220px;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export default AddImage;
