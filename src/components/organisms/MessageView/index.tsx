import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';

import MessageList from '../../molecules/MessageList';

const container = css`
  width: 100%;
  margin: 10px;
`;

const Index: FC = () => (
  <div css={container}>
    <Typography gutterBottom color="textPrimary">
      メッセージ一覧
    </Typography>
    <MessageList />
  </div>
);

export default Index;
