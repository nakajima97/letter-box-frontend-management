import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import EmployeeListItem from '../EmployeeListItem';

const container = css`
  border-right: 1px solid #000;
  height: 100%;
`;

const item = css`
  margin-bottom: 5px;
  border-bottom: 1px solid #000;
`;

const employees = [{ name: '山田 太郎' }, { name: '山田 次郎' }];

const Index: FC = () => (
  <div css={container}>
    {employees.map((employee) => (
      <div css={item}>
        <EmployeeListItem name={employee.name} />
      </div>
    ))}
  </div>
);

export default Index;
