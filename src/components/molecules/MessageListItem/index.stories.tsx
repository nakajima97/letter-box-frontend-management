import { FC } from 'react';
import dayjs from 'dayjs';

import MessageListItem from './index';

export default {
  component: MessageListItem,
  title: 'molecules/MessageListItem',
};

export const Default: FC = () => {
  const day = dayjs('2021-09-15');

  return <MessageListItem date={day} message="ありがとう" />;
};
