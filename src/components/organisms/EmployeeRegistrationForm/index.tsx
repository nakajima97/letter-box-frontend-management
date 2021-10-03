import { FC } from 'react';
import { Container, TextField, Typography, Button } from '@mui/material';

const Index: FC = () => (
  <>
    <Container sx={{ paddingTop: '10px' }}>
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
        従業員登録
      </Typography>
      <TextField required label="名字" margin="normal" sx={{ width: '50%' }} />
      <TextField required label="名前" margin="normal" sx={{ width: '50%' }} />
      <TextField required fullWidth label="ログインID" margin="normal" />
      <TextField
        required
        fullWidth
        label="パスワード"
        margin="normal"
        type="password"
      />
      <TextField
        required
        fullWidth
        label="パスワード再入力"
        margin="normal"
        type="password"
      />
      <Button variant="contained" color="primary" fullWidth>
        登録
      </Button>
    </Container>
  </>
);

export default Index;
