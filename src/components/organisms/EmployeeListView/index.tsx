import { FC, useEffect, useContext, useMemo, useState } from 'react';
import { Typography } from '@mui/material';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import EmployeeList from '../../molecules/EmployeeList';
import createAxiosClient from '../../../api/client';
import { AuthContext } from '../../../contexts/Auth';
import EmployeeType from '../../../types/employeeType';

const container = css`
  width: 100%;
  margin: 10px;
`;

const Index: FC = () => {
  const [employees, setEmployees] = useState<EmployeeType[] | undefined>(
    undefined,
  );
  const { loggedInUserId } = useContext(AuthContext);
  const axiosClient = useMemo(() => createAxiosClient(), []);

  useEffect(() => {
    // eslint-disable-next-line
    console.log(loggedInUserId);
    if (loggedInUserId) {
      axiosClient
        .get(`employees/search?store_id=${loggedInUserId}`)
        // eslint-disable-next-line
        .then((res) => setEmployees(res.data.employees))
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    }
  }, [loggedInUserId, axiosClient]);

  return (
    <div css={container}>
      <Typography gutterBottom>従業員一覧</Typography>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default Index;
