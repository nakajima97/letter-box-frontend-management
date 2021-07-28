import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TextField, Button } from '@material-ui/core';

import LoginTypeSelector from '../../molecules/LoginTypeSelector';

const container = css`
  display: grid;
  gap: 15px;
  padding-top: 10px;
`;

const Index: FC = () => (
  <form css={container}>
    <div>
      <LoginTypeSelector />
    </div>
    <div>
      <TextField label="ID" fullWidth />
    </div>
    <div>
      <TextField label="Password" fullWidth />
    </div>
    <div>
      <Button variant="contained" color="primary" fullWidth>
        ログイン
      </Button>
    </div>
  </form>
);

export default Index;
