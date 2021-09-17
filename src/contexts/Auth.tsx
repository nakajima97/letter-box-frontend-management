import React, { FC, createContext, useState } from 'react';

import LoginType from '../types/loginTypes';

type ContextType = {
  loggedInType: LoginType | undefined;
  setLoggedInType: React.Dispatch<React.SetStateAction<LoginType | undefined>>;
};

const AuthContext = createContext({} as ContextType);

const AuthProvider: FC = ({ children }) => {
  const [loggedInType, setLoggedInType] = useState<LoginType | undefined>(
    undefined,
  );

  return (
    <AuthContext.Provider value={{ loggedInType, setLoggedInType }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
