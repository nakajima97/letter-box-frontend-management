import React, { FC } from 'react';
import { Box } from '@mui/system';

import MessageView from '../../organisms/MessageView';
import Header from '../../organisms/Header';
import Sidebar from '../../organisms/Sidebar';

type Props = {
  id: number;
};

const mainStyle = {
  flexGrow: 1,
  p: 3,
  marginTop: '64px',
};

const Index: FC<Props> = ({ id }) => (
  <>
    <Box sx={{ display: 'flex' }}>
      <header>
        <Header />
      </header>
      <Sidebar />
      <Box component="main" sx={mainStyle}>
        <MessageView type="employee" id={id} />
      </Box>
    </Box>
  </>
);

export default Index;
