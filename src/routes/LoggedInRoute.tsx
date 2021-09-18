import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

type Props = {
  path: string;
};

const LoggedInRoute: FC<Props> = ({ path, children }) => {
  const jwt = Cookies.get('jwt');

  return jwt ? (
    <div>
      <Route path={path}>{children}</Route>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default LoggedInRoute;
