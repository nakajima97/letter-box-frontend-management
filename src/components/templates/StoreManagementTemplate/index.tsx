import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../organisms/Header';
import EmployeeListView from '../../organisms/EmployeeListView';

const main = css`
  width: 100%;
  height: calc(100vh - 64px);
`;

const Index: FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main css={main}>
      <EmployeeListView />
    </main>
  </>
);

export default Index;
