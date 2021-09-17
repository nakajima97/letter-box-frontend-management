import { FC, useState, useContext } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TextField, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import LoginTypeSelector from '../../molecules/LoginTypeSelector';
import LoginType from '../../../types/loginTypes';
import createAxiosClient from '../../../api/client';
import { MessageContext } from '../../../contexts/Message';

const container = css`
  display: grid;
  gap: 15px;
  padding-top: 10px;
`;

const title = css`
  text-align: center;
`;

const Index: FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState<LoginType>('store');
  const history = useHistory();
  const { setMessage, setSeverity } = useContext(MessageContext);

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
        .post('http://localhost:3000/api/v1/store/login', params)
        .then((res) => {
          // eslint-disable-next-line
          if (res.headers.authorization === undefined) {
            setSeverity('error');
            setMessage('ログインに失敗しました');
          } else {
            // eslint-disable-next-line
            Cookies.set('jwt', res.headers.authorization);
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
        .post('http://localhost:3000/api/v1/employee/login', params)
        .then((res) => {
          // eslint-disable-next-line
          if (res.headers.authorization === undefined) {
            setSeverity('error');
            setMessage('ログインに失敗しました');
          } else {
            // eslint-disable-next-line
            Cookies.set('jwt', res.headers.authorization);
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
      <Typography component="h1" variant="h5" css={title}>
        Log In
      </Typography>
      <form css={container}>
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
      </form>
    </>
  );
};

export default Index;
