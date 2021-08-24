import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '@material-ui/core';

import Header from '../../organisms/Header';
import LoginForm from '../../organisms/LoginForm';

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
  </>
);

export default Index;
