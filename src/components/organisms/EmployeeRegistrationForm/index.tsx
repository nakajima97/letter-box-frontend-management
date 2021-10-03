import { FC, useState } from 'react';
import { Container, TextField, Typography, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';

const Index: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <>
      <Container sx={{ paddingTop: '10px' }}>
        <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
          従業員登録
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="名字"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="名前"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="ログインID"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="パスワード"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="パスワード再入力"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                登録
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Index;
