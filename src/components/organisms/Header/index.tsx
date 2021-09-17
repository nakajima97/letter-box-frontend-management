import { FC, useContext } from 'react';
import { Toolbar, AppBar, Typography, Button } from '@mui/material';
import Cookie from 'js-cookie';
import { useHistory } from 'react-router-dom';

import createAxiosClient from '../../../api/client';
import { AuthContext } from '../../../contexts/Auth';
import { MessageContext } from '../../../contexts/Message';

const Index: FC = () => {
  const history = useHistory();
  const { loggedInType, setLoggedInType } = useContext(AuthContext);
  const { setMessage, setSeverity } = useContext(MessageContext);
  const axiosClient = createAxiosClient();
  const jwt = Cookie.get('jwt');

  const buttonText = jwt ? 'ログアウト' : 'ログイン';

  const handleLogout = () => {
    if (jwt === undefined) return undefined;
    if (loggedInType === undefined) return undefined;

    axiosClient
      .delete(`http://localhost:3000/api/v1/${loggedInType}/logout`)
      .then(() => {
        setLoggedInType(undefined);
        setSeverity('success');
        setMessage('ログアウトしました。');
        Cookie.remove('jwt');
        history.push('/');
      })
      .catch(() => {
        setSeverity('error');
        setMessage(
          'ログアウトに失敗しました。時間をおいて再度操作してみてください。',
        );
      });

    return undefined;
  };

  const clickLogoutButton = () => {
    if (loggedInType) {
      handleLogout();
    } else {
      history.push('/');
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LetterBox
        </Typography>
        <Button color="inherit" onClick={clickLogoutButton}>
          {buttonText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
