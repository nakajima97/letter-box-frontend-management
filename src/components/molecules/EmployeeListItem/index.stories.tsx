import { FC } from 'react';
import EmployeeListItem from './index';

export default {
  component: EmployeeListItem,
  title: 'molecules/EmployeeListItem',
};

export const Default: FC = () => (
  <EmployeeListItem firstName="竈門" lastName="ピカチュウ" />
);
