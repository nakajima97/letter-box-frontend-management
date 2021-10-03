import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoggedInRoute from './routes/LoggedInRoute';
import NotLoggedInRoute from './routes/NotLoggedInRoute';
import StoreLoggedInRoute from './routes/StoreLoggedInRoute';
import EmployeeLoggedInRoute from './routes/EmployeeLoggedInRoute';

import LoginPage from './components/pages/LoginPage';
import StoreManagementPage from './components/pages/StoreManagementPage';
import EmployeeManagementPage from './components/pages/EmployeeManagementPage';
import MessageList from './components/pages/MessageListPage';
import NotFound from './components/pages/NotFound';
import EmployeeRegistration from './components/pages/EmployeeRegistration';

const App: FC = () => (
  <Router>
    <Switch>
      <NotLoggedInRoute exact path={['/', '/login']}>
        <LoginPage />
      </NotLoggedInRoute>
      <StoreLoggedInRoute exact path="/store">
        <StoreManagementPage />
      </StoreLoggedInRoute>
      <StoreLoggedInRoute exact path="/store/employee/registration">
        <EmployeeRegistration />
      </StoreLoggedInRoute>
      <EmployeeLoggedInRoute path="/employee">
        <EmployeeManagementPage />
      </EmployeeLoggedInRoute>
      <LoggedInRoute path="/store/message/:id">
        <MessageList />
      </LoggedInRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
