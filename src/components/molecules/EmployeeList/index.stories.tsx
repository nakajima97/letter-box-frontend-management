import { FC } from 'react';
import EmployeeType from '../../../types/employeeType';
import EmployeeList from './index';

export default {
  component: EmployeeList,
  title: 'molecules/EmployeeList',
};

const employees: EmployeeType[] = [
  { id: 1, firstName: '竈門', lastName: 'ピカチュウ' },
  { id: 2, firstName: '鬼舞辻', lastName: 'ジバニャン' },
];

// eslint-disable-next-line
const onClick = (employeeId: number) => {};

export const Default: FC = () => (
  <EmployeeList employees={employees} onClick={onClick} />
);
