import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../organisms/Header';
import MessageView from '../../organisms/MessageView';

const main = css`
  width: 100%;
  height: calc(100vh - 64px);
`;

type Props = {
  id: number;
};

const index: FC<Props> = ({ id }) => (
  <>
    <header>
      <Header />
    </header>
    <main css={main}>
      <MessageView type="employee" id={id} />
    </main>
  </>
);

export default index;
