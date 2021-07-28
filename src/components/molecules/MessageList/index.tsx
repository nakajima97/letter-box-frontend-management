import { FC } from 'react';
import dayjs from 'dayjs';

import MessageListItem from '../MessageListItem';

const message = [
  { date: dayjs(), message: 'ありがとう' },
  { date: dayjs(), message: '感謝します' },
];

const Index: FC = () => (
  <div>
    {message.map((m) => (
      <MessageListItem date={m.date} message={m.message} />
    ))}
  </div>
);

export default Index;
