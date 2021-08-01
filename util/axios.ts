import axios, { Method } from 'axios';

const DOMAIN = 'http://localhost:4000';

// custom Axios
export const request = (method: Method, url: string) => {
  return axios({
    method,
    url: DOMAIN + url,
  })
    .then((res) => res.data.study)
    .catch((err) => console.log(err));
};

// export const request = (method: Method, url: string, data: DataType) => {
//   return axios({
//     method,
//     url: DOMAIN + url,
//     data,
//   })
//       .then((res) => res.data)
//       .catch((err) => console.log(err));
// };
