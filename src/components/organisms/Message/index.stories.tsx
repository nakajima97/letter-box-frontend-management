import { FC, useContext } from 'react';
import Message from './index';

import { MessageContext, MessageProvider } from '../../../contexts/Message';

type Props = {
  storyFn: () => JSX.Element;
};

const Story: FC<Props> = ({ storyFn }) => storyFn();

const myDecorator = (storyFn: () => JSX.Element) => (
  <MessageProvider>
    <Story storyFn={storyFn} />
  </MessageProvider>
);

export default {
  component: Message,
  title: 'organisms/Message',
  decorators: [(story: () => JSX.Element): JSX.Element => myDecorator(story)],
};

export const Success: FC = () => {
  const { setMessage, setSeverity } = useContext(MessageContext);
  setSeverity('success');
  setMessage('Success');

  return <Message />;
};

export const Info: FC = () => {
  const { setMessage, setSeverity } = useContext(MessageContext);
  setSeverity('info');
  setMessage('Info');

  return <Message />;
};

export const Error: FC = () => {
  const { setMessage, setSeverity } = useContext(MessageContext);
  setSeverity('error');
  setMessage('Error');

  return <Message />;
};

export const Warning: FC = () => {
  const { setMessage, setSeverity } = useContext(MessageContext);
  setSeverity('warning');
  setMessage('Warning');

  return <Message />;
};
