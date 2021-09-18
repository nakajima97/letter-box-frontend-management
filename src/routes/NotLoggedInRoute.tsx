import { FC } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

type Props = {
  path: string | Array<string>;
  exact?: boolean;
};

const NotLoggedInRoute: FC<Props> = ({ exact = false, path, children }) => {
  const history = useHistory();
  const jwt = Cookies.get('jwt');

  if (jwt) history.goBack();

  return (
    <div>
      <Route exact={exact} path={path}>
        {children}
      </Route>
    </div>
  );
};

export default NotLoggedInRoute;
