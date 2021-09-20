import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { List } from '@mui/material';

import EmployeeListItem from '../EmployeeListItem';
import EmployeeType from '../../../types/employeeType';

const container = css`
  border-right: 1px solid #000;
  height: 100%;
`;

type Props = {
  employees: EmployeeType[] | undefined;
};

const Index: FC<Props> = ({ employees }) => (
  <List css={container}>
    {employees &&
      employees.map((employee) => (
        <EmployeeListItem name={`${employee.firstName} ${employee.lastName}`} />
      ))}
  </List>
);

export default Index;
