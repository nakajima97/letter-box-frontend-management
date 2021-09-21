import { FC } from 'react';
import EmployeeListItem from './index';

// eslint-disable-next-line
const onClick = (employeeId: number) => {};

export default {
  component: EmployeeListItem,
  title: 'molecules/EmployeeListItem',
};

export const Default: FC = () => (
  <EmployeeListItem
    id={1}
    firstName="竈門"
    lastName="ピカチュウ"
    onClick={() => onClick(1)}
  />
);
