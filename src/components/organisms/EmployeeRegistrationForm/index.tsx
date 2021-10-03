import { FC, useState, useContext, FormEvent } from 'react';
import { Container, TextField, Typography, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';

import createAxiosClient from '../../../api/client';
import { AuthContext } from '../../../contexts/Auth';

const Index: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { loggedInUserId } = useContext(AuthContext);

  const axiosClient = createAxiosClient();

  const handleSignUp = (event: FormEvent) => {
    const params = {
      employee_auth: { employee_login_id: loginId, password },
      employee: { firstName, lastName, storeId: loggedInUserId },
    };

    axiosClient
      .post('employee', params)
      // eslint-disable-next-line
      .then((res) => console.log(res))
      // eslint-disable-next-line
      .catch((err) => console.log(err));

    event.preventDefault();
  };

  const checkValue = () =>
    !(
      firstName &&
      lastName &&
      loginId &&
      password &&
      passwordConfirm &&
      password === passwordConfirm
    );

  return (
    <>
      <Container sx={{ paddingTop: '10px' }}>
        <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
          従業員登録
        </Typography>
        <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 3 }}>
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
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={checkValue()}
              >
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
