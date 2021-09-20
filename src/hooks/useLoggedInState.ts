import { useContext, useEffect } from 'react';
import createAxiosClient from '../api/client';
import { AuthContext } from '../contexts/Auth';

type UserTypeResponseType = {
  data: {
    type: 'store' | 'employee' | 'none';
  };
};

type UserIdResponseType = {
  data: {
    userId: string;
  };
};

const useLoggedInState = (): void => {
  const { setLoggedInUserId, setLoggedInType } = useContext(AuthContext);
  const axiosClient = createAxiosClient();

  useEffect(() => {
    axiosClient('check/user_id')
      .then((res: UserIdResponseType) => {
        if (res.data.userId === 'none') {
          setLoggedInUserId(undefined);
        } else {
          setLoggedInUserId(res.data.userId);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  });

  useEffect(() => {
    axiosClient('check/')
      .then((res: UserTypeResponseType) => {
        if (res.data.type === 'none') {
          setLoggedInType(undefined);
        } else {
          setLoggedInType(res.data.type);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  });
};

export default useLoggedInState;
