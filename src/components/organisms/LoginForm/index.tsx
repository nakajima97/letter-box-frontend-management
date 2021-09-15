import { FC, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TextField, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import LoginTypeSelector from '../../molecules/LoginTypeSelector';
import LoginType from '../../../types/loginTypes';

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

  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    history.push('/employee');
  };

  return (
    <>
      <Typography component="h1" variant="h5" css={title}>
        Log In
      </Typography>
      <form css={container} onSubmit={loginHandler}>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button variant="contained" color="primary" fullWidth>
            ログイン
          </Button>
        </div>
      </form>
    </>
  );
};

export default Index;
