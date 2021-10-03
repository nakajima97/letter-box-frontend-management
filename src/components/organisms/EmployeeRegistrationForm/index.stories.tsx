import { FC, useContext } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import EmployeeRegistrationForm from './index';
import { AuthContext, AuthProvider } from '../../../contexts/Auth';
import { MessageProvider } from '../../../contexts/Message';

type Props = {
  storyFn: () => JSX.Element;
};

const Story: FC<Props> = ({ storyFn }) => storyFn();

const myDecorator = (storyFn: () => JSX.Element) => (
  <MessageProvider>
    <AuthProvider>
      <Story storyFn={storyFn} />
    </AuthProvider>
  </MessageProvider>
);

export default {
  component: EmployeeRegistrationForm,
  title: 'organisms/RegistrationForm',
  decorators: [(story: () => JSX.Element): JSX.Element => myDecorator(story)],
};

export const Default: FC = () => {
  const { setLoggedInType, setLoggedInUserId } = useContext(AuthContext);

  const mock = new MockAdapter(axios);

  setLoggedInType('store');
  setLoggedInUserId('1');

  mock.onPost('http://localhost:3000/api/v1/employee').reply(200);

  return <EmployeeRegistrationForm />;
};
