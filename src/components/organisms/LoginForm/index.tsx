import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TextField, Button, Typography } from '@material-ui/core';

import LoginTypeSelector from '../../molecules/LoginTypeSelector';

const container = css`
  display: grid;
  gap: 15px;
  padding-top: 10px;
`;

const title = css`
  text-align: center;
`;

const Index: FC = () => (
  <>
    <Typography component="h1" variant="h5" css={title}>
      Log In
    </Typography>
    <form css={container}>
      <div>
        <LoginTypeSelector />
      </div>
      <TextField
        required
        fullWidth
        label="ID"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        required
        label="Password"
        variant="outlined"
        margin="normal"
      />
      <div>
        <Button variant="contained" color="primary" fullWidth>
          ログイン
        </Button>
      </div>
    </form>
  </>
);

export default Index;
