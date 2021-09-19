import { FC, useContext, useEffect } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthContext } from '../contexts/Auth';

type Props = {
  path: string;
};

const LoggedInRoute: FC<Props> = ({ path, children }) => {
  const jwt = Cookies.get('jwt');
  const { loggedInType } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (loggedInType === 'employee') history.push('/employee');
  }, [loggedInType, history]);

  return jwt ? (
    <div>
      <Route path={path}>{children}</Route>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default LoggedInRoute;
