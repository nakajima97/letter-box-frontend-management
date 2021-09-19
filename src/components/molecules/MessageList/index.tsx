import { FC } from 'react';
import { List } from '@mui/material';

import MessageListItem from '../MessageListItem';
import MessageType from '../../../types/messageType';

type Props = {
  messages: MessageType[];
};

const Index: FC<Props> = ({ messages }) => (
  <List>
    {messages.map((m) => (
      <MessageListItem
        date={m.createdAt}
        message={m.messageText}
        key={m.createdAt.format('YYYY-MM-DD')}
      />
    ))}
  </List>
);

export default Index;
