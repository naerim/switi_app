//검색 기록 모두 삭제
import axios from 'axios';

export const searchAllDelete = async (token: string) => {
  const response = await axios({
    method: 'delete',
    url: 'http://localhost:4000/search/deleteAll',
    headers: { Authorization: token },
  });
  return response;
};

//검색 기록 하나 삭제
export const searchDelete = async (token: string, id: number) => {
  const response = await axios({
    method: 'delete',
    url: `http://localhost:4000/search//deleteOne/${id}`,
    headers: { Authorization: token },
  });
  console.log(`검색 하나 삭제:`, response.data);
  return response;
};
