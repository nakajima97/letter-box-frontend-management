import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import StoreManagementPage from './components/pages/StoreManagementPage';
import EmployeeManagementPage from './components/pages/EmployeeManagementPage';
import MessageList from './components/pages/MessageListPage';
import NotFound from './components/pages/NotFound';
import LoggedInRoute from './routes/LoggedInRoute';
import NotLoggedInRoute from './routes/NotLoggedInRoute';
import StoreLoggedInRoute from './routes/StoreLoggedInRoute';
import EmployeeLoggedInRoute from './routes/EmployeeLoggedInRoute';

const App: FC = () => (
  <Router>
    <Switch>
      <NotLoggedInRoute exact path={['/', '/login']}>
        <LoginPage />
      </NotLoggedInRoute>
      <StoreLoggedInRoute path="/store">
        <StoreManagementPage />
      </StoreLoggedInRoute>
      <EmployeeLoggedInRoute path="/employee">
        <EmployeeManagementPage />
      </EmployeeLoggedInRoute>
      <LoggedInRoute path="/messages/:id">
        <MessageList />
      </LoggedInRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
