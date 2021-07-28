import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../organisms/Header';
import LoginForm from '../../organisms/LoginForm';

const main = css`
  width: 100%;
  height: calc(100vh - 64px);
`;

const form = css`
  width: 100%auto;
  max-width: 500px;
  margin: 0 auto;
`;

const Index: FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main css={main}>
      <div css={form}>
        <LoginForm />
      </div>
    </main>
  </>
);

export default Index;
