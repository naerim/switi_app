//검색 기록 모두 삭제
import axios from 'axios';
import { HostURL } from '../url';

export const searchAllDelete = async (token: string) => {
  const response = await axios({
    method: 'delete',
    url: `${HostURL}/search/deleteAll`,
    headers: { Authorization: token },
  });
  return response;
};

//검색 기록 하나 삭제
export const searchDelete = async (token: string, id: number) => {
  const response = await axios({
    method: 'delete',
    url: `${HostURL}/search//deleteOne/${id}`,
    headers: { Authorization: token },
  });
  // console.log(`검색 하나 삭제:`, response.data);
  return response;
};
