import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../organisms/Header';
import MessageView from '../../organisms/MessageView';

const main = css`
  width: 100%;
  height: calc(100vh - 64px);
`;

const index: FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main css={main}>
      <MessageView />
    </main>
  </>
);

export default index;
