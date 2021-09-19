import dayjs from 'dayjs';
import { FC } from 'react';
import MessageType from '../../../types/messageType';
import MessageList from './index';

const mockMessage: MessageType[] = [
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
];

export default {
  component: MessageList,
  title: 'molecules/MessageList',
};

export const Default: FC = () => <MessageList messages={mockMessage} />;
