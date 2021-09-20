import { FC } from 'react';

import LoginTemplate from '../../templates/LoginTemplate';
import useLoggedInState from '../../../hooks/useLoggedInState';

const Index: FC = () => {
  useLoggedInState();

  return <LoginTemplate />;
};

export default Index;
