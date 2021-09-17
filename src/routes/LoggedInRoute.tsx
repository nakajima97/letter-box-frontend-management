import { FC, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../contexts/Auth';

type Props = {
  path: string;
};

const LoggedInRoute: FC<Props> = ({ path, children }) => {
  const { loggedInType } = useContext(AuthContext);

  return loggedInType ? (
    <div>
      <Route path={path}>{children}</Route>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default LoggedInRoute;
