import { FC } from 'react';
import StoreCommonComponent from './index';

import { MessageProvider } from '../../../contexts/Message';

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
  component: StoreCommonComponent,
  title: 'organisms/StoreCommonComponent',
  decorators: [(story: () => JSX.Element): JSX.Element => myDecorator(story)],
};

export const Default: FC = () => <StoreCommonComponent />;
