import { FC, useEffect, useContext, useMemo, useState } from 'react';
import { Typography } from '@mui/material';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useHistory } from 'react-router-dom';

import EmployeeList from '../../molecules/EmployeeList';
import createAxiosClient from '../../../api/client';
import { AuthContext } from '../../../contexts/Auth';
import EmployeeType from '../../../types/employeeType';

const container = css`
  width: 100%;
  margin: 10px;
`;

type ResponseType = {
  employees: EmployeeType[];
};

const Index: FC = () => {
  const [employees, setEmployees] = useState<EmployeeType[] | undefined>(
    undefined,
  );
  const { loggedInUserId } = useContext(AuthContext);
  const axiosClient = useMemo(() => createAxiosClient(), []);
  const history = useHistory();

  useEffect(() => {
    if (loggedInUserId) {
      axiosClient
        .get<ResponseType>(`employees/search?store_id=${loggedInUserId}`)
        .then((res) => setEmployees(res.data.employees))
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    }
  }, [loggedInUserId, axiosClient]);

  const onClick = (employeeId: number) => {
    history.push(`/store/message/${employeeId}`);
  };

  if (employees === undefined)
    return <Typography>従業員が登録されておりません。</Typography>;

  return (
    <div css={container}>
      <Typography gutterBottom>従業員一覧</Typography>
      <EmployeeList employees={employees} onClick={onClick} />
    </div>
  );
};

export default Index;
