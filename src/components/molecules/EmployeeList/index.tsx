import { FC } from 'react';
import { List } from '@mui/material';

import EmployeeListItem from '../EmployeeListItem';
import EmployeeType from '../../../types/employeeType';

const container = {
  height: '100%',
};

type Props = {
  employees: EmployeeType[] | undefined;
  onClick: (employeeId: number) => void;
};

const Index: FC<Props> = ({ employees, onClick }) => (
  <List sx={container}>
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
