import { FC } from 'react';

import LoginTemplate from '../../templates/LoginTemlate';
import useLoggedInState from '../../../hooks/useLoggedInState';

const Index: FC = () => {
  useLoggedInState();

  return <LoginTemplate />;
};

export default Index;
