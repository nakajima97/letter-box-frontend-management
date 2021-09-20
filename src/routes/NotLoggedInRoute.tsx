import { FC, useContext } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';

type Props = {
  path: string | Array<string>;
  exact?: boolean;
};

const NotLoggedInRoute: FC<Props> = ({ exact = false, path, children }) => {
  const history = useHistory();
  const { loggedInType } = useContext(AuthContext);

  if (loggedInType) history.push(`/${loggedInType}`);

  return (
    <div>
      <Route exact={exact} path={path}>
        {children}
      </Route>
    </div>
  );
};

export default NotLoggedInRoute;
