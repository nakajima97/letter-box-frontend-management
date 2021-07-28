import { FC } from 'react';

import Header from '../../organisms/Header';
import StoreMessageView from '../../organisms/StoreMessageView';

const Index: FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <StoreMessageView />
    </main>
  </>
);

export default Index;
