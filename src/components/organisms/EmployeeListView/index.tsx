import { FC } from 'react';
import { Typography } from '@mui/material';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import EmployeeList from '../../molecules/EmployeeList';

const container = css`
  width: 100%;
  margin: 10px;
`;

const Index: FC = () => (
  <div css={container}>
    <Typography gutterBottom>従業員一覧</Typography>
    <EmployeeList />
  </div>
);

export default Index;
