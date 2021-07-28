import { FC } from 'react';

import { Toolbar, AppBar, Typography } from '@material-ui/core';

const Index: FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">LetterBox</Typography>
    </Toolbar>
  </AppBar>
);

export default Index;
