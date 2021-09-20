import React, { FC, createContext, useState, useEffect } from 'react';

import LoginType from '../types/loginType';
import createAxiosClient from '../api/client';

type ContextType = {
  loggedInType: LoginType | undefined;
  setLoggedInType: React.Dispatch<React.SetStateAction<LoginType | undefined>>;
  loggedInUserId: string | undefined;
  setLoggedInUserId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

type CheckResponseType = {
  data: {
    type: string;
  };
};

type UserIdResponseType = {
  data: {
    // eslint-disable-next-line
    user_id: string;
  };
};

const AuthContext = createContext({} as ContextType);

const AuthProvider: FC = ({ children }) => {
  const axiosClient = createAxiosClient();

  const [loggedInType, setLoggedInType] = useState<LoginType | undefined>(
    undefined,
  );
  const [loggedInUserId, setLoggedInUserId] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    axiosClient('check')
      .then((res: CheckResponseType) => {
        if (res.data.type === 'none') {
          setLoggedInType(undefined);
        } else {
          setLoggedInType(res.data.type as LoginType);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  }, [axiosClient]);

  useEffect(() => {
    axiosClient('check/user_id')
      .then((res: UserIdResponseType) => {
        if (res.data.user_id === 'none') {
          setLoggedInUserId(undefined);
        } else {
          setLoggedInUserId(res.data.user_id);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  }, [axiosClient]);

  return (
    <AuthContext.Provider
      value={{
        loggedInType,
        setLoggedInType,
        loggedInUserId,
        setLoggedInUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
