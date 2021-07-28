import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../organisms/Header';
import EmployeeMessageView from '../../organisms/EmployeeMessageView';

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
      <EmployeeMessageView />
    </main>
  </>
);

export default index;
