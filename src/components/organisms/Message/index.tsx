import React, { FC, useState, useContext, useEffect } from 'react';
import { Snackbar, Alert } from '@mui/material';

import { MessageContext } from '../../../contexts/Message';

const Index: FC = () => {
  const [open, setOpen] = useState(false);
  const { message, severity, setMessage } = useContext(MessageContext);

  useEffect(() => {
    if (message !== '') setOpen(true);
  }, [message]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setMessage('');
    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Index;
