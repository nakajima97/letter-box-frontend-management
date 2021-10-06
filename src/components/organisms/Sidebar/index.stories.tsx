import { FC } from 'react';
import { MemoryRouter } from 'react-router-dom';

import SideBar from './index';

type Props = {
  storyFn: () => JSX.Element;
};

const Story: FC<Props> = ({ storyFn }) => storyFn();

const myDecorator = (storyFn: () => JSX.Element) => (
  <MemoryRouter>
    <Story storyFn={storyFn} />
  </MemoryRouter>
);

export default {
  component: SideBar,
  title: 'organisms/SideBar',
  decorators: [(story: () => JSX.Element): JSX.Element => myDecorator(story)],
};

export const Default: FC = () => <SideBar />;
