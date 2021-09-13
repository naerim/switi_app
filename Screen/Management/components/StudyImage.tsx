import React from 'react';
import styled from 'styled-components/native';

// interface Props {
//   img: any;
//   done: boolean;
// }

// const StudyImage: React.FC<Props> = ({ img, done }) => {
//     // 이미지 불러오기
//     const loadImg = (url: string) => {
//         return 'http://localhost:4000/images/' + url;
//     };
//
//     return (
//         <Container>
//             <Images source={{ uri: loadImg(img) }} resizeMode="stretch" />
//     <RecruitIcon done={!done} />
//     </Container>
// );
// };

const StudyImage = () => {
  return (
    <Container>
      <Images source={{ uri: 'imgPath' }} resizeMode="stretch" />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
`;

const Images = styled.Image`
  background-color: #ffeec9;
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 9px;
`;

export default StudyImage;
