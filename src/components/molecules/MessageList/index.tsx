import { FC } from 'react';
import dayjs from 'dayjs';
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import { List } from '@mui/material';

import MessageListItem from '../MessageListItem';

// const item = css`
//   /* border-bottom: 1px solid #000; */
//   padding: 8px;
// `;

const message = [
  { date: dayjs(), message: 'ありがとう' },
  { date: dayjs(), message: '感謝します' },
];

const Index: FC = () => (
  <List>
    {message.map((m) => (
      <MessageListItem date={m.date} message={m.message} />
    ))}
  </List>
);

export default Index;
