import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import StoreManagementPage from './components/pages/StoreManagementPage';
import EmployeeManagementPage from './components/pages/EmployeeManagementPage';
import MessageList from './components/pages/MessageListPage';
import NotFound from './components/pages/NotFound';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path={['/', '/login']}>
        <LoginPage />
      </Route>
      <Route path="/store">
        <StoreManagementPage />
      </Route>
      <Route path="/employee">
        <EmployeeManagementPage />
      </Route>
      <Route path="/messages/:id">
        <MessageList />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
