import React, { FC } from 'react';
import { Container, Typography } from '@mui/material';

const Index: FC = () => (
  <Container>
    <Typography color="error">ページが見つかりませんでした。</Typography>
    <Typography color="textPrimary">URLの見直しをお願いいたします。</Typography>
  </Container>
);

export default Index;
