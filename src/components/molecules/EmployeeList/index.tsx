import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { List } from '@mui/material';

import EmployeeListItem from '../EmployeeListItem';
import EmployeeType from '../../../types/employeeType';

const container = css`
  height: 100%;
`;

type Props = {
  employees: EmployeeType[] | undefined;
  onClick: (employeeId: number) => void;
};

const Index: FC<Props> = ({ employees, onClick }) => (
  <List css={container}>
    {employees &&
      employees.map((e) => (
        <EmployeeListItem
          id={e.id}
          firstName={e.firstName}
          lastName={e.lastName}
          onClick={onClick}
        />
      ))}
  </List>
);

export default Index;
