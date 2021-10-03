import { FC } from 'react';
import { Container, TextField, Typography, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';

const Index: FC = () => (
  <>
    <Container sx={{ paddingTop: '10px' }}>
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
        従業員登録
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField required label="名字" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required label="名前" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth label="ログインID" />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth label="パスワード" type="password" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="パスワード再入力"
              type="password"
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

export default Index;
