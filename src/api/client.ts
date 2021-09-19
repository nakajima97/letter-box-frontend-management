import axios, { AxiosInstance } from 'axios';
import Cookie from 'js-cookie';
import applyCaseMiddleware from 'axios-case-converter';

const createHeader = (jwt: string | undefined) => {
  if (jwt) {
    return {
      'content-type': 'application/json',
      authorization: jwt,
    };
  }

  return {
    'content-type': 'application/json',
  };
};

const createAxiosClient = (): AxiosInstance => {
  const jwt = Cookie.get('jwt');

  const headers = createHeader(jwt);

  return applyCaseMiddleware(
    axios.create({
      headers,
      withCredentials: true,
      baseURL: 'http://localhost:3000/api/v1/',
    }),
  );
};

export default createAxiosClient;
