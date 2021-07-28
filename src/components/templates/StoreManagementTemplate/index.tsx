import { FC } from 'react';

import Header from '../../organisms/Header';
import MessageView from '../../organisms/MessageView';

const Index: FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <MessageView />
    </main>
  </>
);

export default Index;
