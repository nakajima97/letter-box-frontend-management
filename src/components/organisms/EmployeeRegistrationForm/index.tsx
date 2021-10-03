import { FC } from 'react';
import { Container, Typography } from '@mui/material';

const Index: FC = () => (
  <>
    <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
      従業員登録
    </Typography>
    <Container>フォーム</Container>
  </>
);

export default Index;
