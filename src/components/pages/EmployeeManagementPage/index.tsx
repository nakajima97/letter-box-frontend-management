import { FC, useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth';

import EmployeeManagementTemplate from '../../templates/EmployeeManagementTemplate';

const Index: FC = () => {
  const { loggedInUserId } = useContext(AuthContext);

  return (
    <>
      <EmployeeManagementTemplate id={Number(loggedInUserId)} />
    </>
  );
};

export default Index;
