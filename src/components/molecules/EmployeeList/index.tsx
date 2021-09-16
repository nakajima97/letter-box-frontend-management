import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { List } from '@mui/material';

import EmployeeListItem from '../EmployeeListItem';

const container = css`
  border-right: 1px solid #000;
  height: 100%;
`;

const employees = [{ name: '山田 太郎' }, { name: '山田 次郎' }];

const Index: FC = () => (
  <List css={container}>
    {employees.map((employee) => (
      <EmployeeListItem name={employee.name} />
    ))}
  </List>
);

export default Index;
