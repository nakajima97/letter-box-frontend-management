import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '@mui/material';

import Header from '../../organisms/Header';
import LoginForm from '../../organisms/LoginForm';
import Message from '../../organisms/Message';

const main = css`
  width: 100%;
  height: calc(100vh - 64px);
  margin-top: 40px;
`;

const Index: FC = () => (
  <>
    <header>
      <Header />
    </header>
    <Container maxWidth="xs" css={main} component="main">
      <LoginForm />
    </Container>
    <Message />
  </>
);

export default Index;
