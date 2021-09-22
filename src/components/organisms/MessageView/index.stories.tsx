import { FC, useContext } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import MessageView from './index';
import { AuthContext, AuthProvider } from '../../../contexts/Auth';
import { mockResponse2Messages, mockResponseNoMessage } from './MockResnpose';

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
  component: MessageView,
  title: 'organisms/MessageView',
  decorators: [(story: () => JSX.Element): JSX.Element => myDecorator(story)],
};

export const Default: FC = () => {
  const { setLoggedInType, setLoggedInUserId } = useContext(AuthContext);

  const mock = new MockAdapter(axios);

  setLoggedInType('employee');
  setLoggedInUserId('1');

  mock
    .onGet('http://localhost:3000/api/v1/messages?employee_id=1')
    .reply(200, mockResponse2Messages);

  return <MessageView type="employee" id={1} />;
};

export const NoMessage: FC = () => {
  const { setLoggedInType, setLoggedInUserId } = useContext(AuthContext);

  const mock = new MockAdapter(axios);

  setLoggedInType('employee');
  setLoggedInUserId('1');

  mock
    .onGet('http://localhost:3000/api/v1/messages')
    .reply(200, mockResponseNoMessage);

  return <MessageView type="employee" id={1} />;
};
