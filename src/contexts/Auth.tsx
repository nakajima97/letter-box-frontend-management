import React, { FC, createContext, useState } from 'react';

import LoginType from '../types/loginType';

type ContextType = {
  loggedInType: LoginType | undefined;
  setLoggedInType: React.Dispatch<React.SetStateAction<LoginType | undefined>>;
  loggedInUserId: string | undefined;
  setLoggedInUserId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const AuthContext = createContext({} as ContextType);

const AuthProvider: FC = ({ children }) => {
  const [loggedInType, setLoggedInType] = useState<LoginType | undefined>(
    undefined,
  );
  const [loggedInUserId, setLoggedInUserId] = useState<string | undefined>(
    undefined,
  );

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
