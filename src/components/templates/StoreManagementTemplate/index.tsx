import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../organisms/Header';
import StoreMessageView from '../../organisms/StoreMessageView';

const main = css`
  height: calc(100vh - 64px);
`;

const Index: FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main css={main}>
      <StoreMessageView />
    </main>
  </>
);

export default Index;
