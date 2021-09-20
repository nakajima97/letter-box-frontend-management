import { FC } from 'react';
import useLoggedInState from '../../../hooks/useLoggedInState';

import StoreManagementTemplate from '../../templates/StoreManagementTemplate';

const Index: FC = () => {
  useLoggedInState();

  return (
    <>
      <StoreManagementTemplate />
    </>
  );
};

export default Index;
