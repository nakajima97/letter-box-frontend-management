import React, { FC, createContext, useState } from 'react';

import SeverityType from '../types/severityType';

type ContextType = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  severity: SeverityType;
  setSeverity: React.Dispatch<React.SetStateAction<SeverityType>>;
};

const MessageContext = createContext({} as ContextType);

const MessageProvider: FC = ({ children }) => {
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<SeverityType>('success');

  return (
    <MessageContext.Provider
      value={{ message, setMessage, severity, setSeverity }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
