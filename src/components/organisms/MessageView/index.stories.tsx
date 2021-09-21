import { FC, useContext } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import dayjs from 'dayjs';

import MessageView from './index';
import { AuthContext, AuthProvider } from '../../../contexts/Auth';

const mockResponse = {
  message: 'Success',
  data: [
    {
      id: 1,
      storeId: 1,
      employeeId: 1,
      messageText: 'ありがとう',
      updateAt: dayjs('2021/09/19'),
      createdAt: dayjs('2021/09/19'),
    },
    {
      id: 2,
      storeId: 1,
      employeeId: 1,
      messageText: 'Thank you!!',
      updateAt: dayjs('2021/09/19'),
      createdAt: dayjs('2021/09/19'),
    },
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
  component: MessageView,
  title: 'organisms/MessageView',
  decorators: [(story: () => JSX.Element): JSX.Element => myDecorator(story)],
};

// export const Default: FC = () => {
//   const { setLoggedInType, setLoggedInUserId } = useContext(AuthContext);

//   const mock = new MockAdapter(axios);

//   setLoggedInType('employee');
//   setLoggedInUserId('1');

//   mock.onGet('http://localhost:3000/api/v1/messages').reply(200, mockResponse);

//   return <MessageView />;
// };
export const Default: FC = () => <p>改修中</p>;
