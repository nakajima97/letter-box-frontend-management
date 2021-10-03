import { FC, useState, useContext } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Box } from '@mui/system';

import LoginTypeSelector from '../../molecules/LoginTypeSelector';
import LoginType from '../../../types/loginType';
import createAxiosClient from '../../../api/client';
import { MessageContext } from '../../../contexts/Message';
import { AuthContext } from '../../../contexts/Auth';

const container = {
  display: 'grid',
  gap: '15px',
  paddingTop: '10px',
};

const Index: FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState<LoginType>('store');
  const history = useHistory();
  const { setMessage, setSeverity } = useContext(MessageContext);
  const { setLoggedInType, setLoggedInUserId } = useContext(AuthContext);

  const axiosClient = createAxiosClient();

  const loginHandler = () => {
    if (loginType === 'store') {
      const params = {
        store_auth: {
          store_login_id: id,
          password,
        },
      };

      axiosClient
        .post('store/login', params)
        .then((res) => {
          // eslint-disable-next-line
          if (res.headers.authorization === undefined) {
            setSeverity('error');
            setMessage('ログインに失敗しました');
          } else {
            // eslint-disable-next-line
            Cookies.set('jwt', res.headers.authorization);
            setLoggedInType('store');
            // eslint-disable-next-line
            setLoggedInUserId(res.data.userId);
            history.push('/store');
          }
        })
        .catch(() => {
          setSeverity('error');
          setMessage('通信エラーが発生しました。');
        });
    } else {
      const params = {
        employee_auth: {
          employee_login_id: id,
          password,
        },
      };

      axiosClient
        .post('employee/login', params)
        .then((res) => {
          // eslint-disable-next-line
          if (res.headers.authorization === undefined) {
            setSeverity('error');
            setMessage('ログインに失敗しました');
          } else {
            // eslint-disable-next-line
            Cookies.set('jwt', res.headers.authorization);
            // eslint-disable-next-line
            setLoggedInUserId(res.data.userId);
            setLoggedInType('employee');
            history.push('/employee');
          }
        })
        .catch(() => {
          setSeverity('error');
          setMessage('通信エラーが発生しました。');
        });
    }
  };

  return (
    <>
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
        ログイン
      </Typography>
      <Box sx={container}>
        <div>
          <LoginTypeSelector value={loginType} onChange={setLoginType} />
        </div>
        <TextField
          required
          fullWidth
          label="ID"
          variant="outlined"
          margin="normal"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <TextField
          fullWidth
          required
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={loginHandler}
          >
            ログイン
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Index;
