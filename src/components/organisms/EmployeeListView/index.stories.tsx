import { FC, useContext } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import EmployeeListView from './index';
import { AuthProvider, AuthContext } from '../../../contexts/Auth';

const mockResponse = {
  employees: [
    { id: 1, firstName: '竈門', lastName: 'ピカチュウ' },
    { id: 2, firstName: '鬼舞辻', lastName: 'ジバニャン' },
  ],
};

type Props = {
  storyFn: () => JSX.Element;
};

const Story: FC<Props> = ({ storyFn }) => storyFn();

const myDecorator = (storyFn: () => JSX.Element) => (
  <AuthProvider>
    <Story storyFn={storyFn} />
  </AuthProvider>
);

export default {
  component: EmployeeListView,
  title: 'organisms/EmployeeListView',
  decorators: [(story: () => JSX.Element): JSX.Element => myDecorator(story)],
};

export const Default: FC = () => {
  const { setLoggedInType, setLoggedInUserId } = useContext(AuthContext);

  const mock = new MockAdapter(axios);

  setLoggedInType('store');
  setLoggedInUserId('1');

  mock
    .onGet('http://localhost:3000/api/v1/employees/search?store_id=1')
    .reply(200, mockResponse);

  return <EmployeeListView />;
};

export const NoEmployee: FC = () => {
  const { setLoggedInType, setLoggedInUserId } = useContext(AuthContext);

  const mock = new MockAdapter(axios);

  setLoggedInType('store');
  setLoggedInUserId('1');

  mock
    .onGet('http://localhost:3000/api/v1/employees/search?store_id=1')
    .reply(200);

  return <EmployeeListView />;
};
