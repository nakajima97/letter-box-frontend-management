import { FC } from 'react';
import EmployeeListItem from './index';

export default {
  component: EmployeeListItem,
  title: 'molecules/EmployeeListItem',
};

export const Default: FC = () => <EmployeeListItem name="竈門ピカチュウ" />;
