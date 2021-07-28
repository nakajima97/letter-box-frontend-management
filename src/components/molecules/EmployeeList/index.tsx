import { FC } from 'react';

import EmployeeListItem from '../EmployeeListItem';

const employees = [{ name: '山田 太郎' }, { name: '山田 次郎' }];

const Index: FC = () => (
  <div>
    {employees.map((employee) => (
      <EmployeeListItem name={employee.name} />
    ))}
  </div>
);

export default Index;
