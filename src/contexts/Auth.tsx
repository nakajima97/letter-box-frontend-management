import React, { FC, createContext, useState, useEffect } from 'react';

import LoginType from '../types/loginTypes';
import createAxiosClient from '../api/client';

type ContextType = {
  loggedInType: LoginType | undefined;
  setLoggedInType: React.Dispatch<React.SetStateAction<LoginType | undefined>>;
};

type ResponseType = {
  data: {
    type: string;
  };
};

const AuthContext = createContext({} as ContextType);

const AuthProvider: FC = ({ children }) => {
  const axiosClient = createAxiosClient();

  const [loggedInType, setLoggedInType] = useState<LoginType | undefined>(
    undefined,
  );

  useEffect(() => {
    axiosClient('check')
      .then((res: ResponseType) => {
        // eslint-disable-next-line
        console.log(res.data);
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

  return (
    <AuthContext.Provider value={{ loggedInType, setLoggedInType }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
