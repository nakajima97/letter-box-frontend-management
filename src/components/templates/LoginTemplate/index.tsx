import { FC } from 'react';
import { Container } from '@mui/material';

import Header from '../../organisms/Header';
import LoginForm from '../../organisms/LoginForm';
import Message from '../../organisms/Message';

const main = {
  width: '100%',
  height: 'calc(100vh - 64px)',
  marginTop: '40px',
};

const Index: FC = () => (
  <>
    <header>
      <Header />
    </header>
    <Container maxWidth="xs" sx={main} component="main">
      <LoginForm />
    </Container>
    <Message />
  </>
);

export default Index;
