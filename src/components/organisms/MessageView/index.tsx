import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import MessageList from '../../molecules/MessageList';

const container = css`
  width: 100%;
`;

const Index: FC = () => (
  <div css={container}>
    <MessageList />
  </div>
);

export default Index;
