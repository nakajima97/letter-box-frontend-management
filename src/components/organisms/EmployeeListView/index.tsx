import { FC, useEffect, useContext, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import EmployeeList from '../../molecules/EmployeeList';
import Loading from '../../molecules/Loading';
import createAxiosClient from '../../../api/client';
import { AuthContext } from '../../../contexts/Auth';
import EmployeeType from '../../../types/employeeType';

const container = {
  width: '100%',
  margin: '10px',
};

type ResponseType = {
  employees: EmployeeType[];
};

const Index: FC = () => {
  const [employees, setEmployees] = useState<EmployeeType[] | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState(true);
  const { loggedInUserId } = useContext(AuthContext);
  const axiosClient = useMemo(() => createAxiosClient(), []);
  const history = useHistory();

  useEffect(() => {
    if (loggedInUserId) {
      axiosClient
        .get<ResponseType>(`employees/search?store_id=${loggedInUserId}`)
        .then((res) => setEmployees(res.data.employees))
        // eslint-disable-next-line
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [loggedInUserId, axiosClient]);

  const onClick = (employeeId: number) => {
    history.push(`/store/message/${employeeId}`);
  };

  const ScreenAfterLoading: FC = () => (
    <>
      {employees === undefined ? (
        <Typography>従業員が登録されておりません。</Typography>
      ) : (
        <EmployeeList employees={employees} onClick={onClick} />
      )}
    </>
  );

  return (
    <Box sx={container}>
      <Typography gutterBottom>従業員一覧</Typography>
      {isLoading ? <Loading /> : <ScreenAfterLoading />}
    </Box>
  );
};

export default Index;
