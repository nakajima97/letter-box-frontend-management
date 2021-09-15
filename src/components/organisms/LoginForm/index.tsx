import { FC, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TextField, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import LoginTypeSelector from '../../molecules/LoginTypeSelector';
import LoginType from '../../../types/loginTypes';
import createAxiosClient from '../../../api/client';

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

  const axiosClient = createAxiosClient();

  const loginHandler = () => {
    if (loginType === 'store') {
      // 店舗アカウントでログイン
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
          console.log(res);
          // eslint-disable-next-line
          if (res.headers.authorization === undefined) {
            // eslint-disable-next-line
            console.log('ログイン失敗');
          } else {
            // eslint-disable-next-line
            Cookies.set('jwt', res.headers.authorization);
            history.push('/employee');
          }
        })
        // eslint-disable-next-line
        .catch((err) => console.log(err));
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
