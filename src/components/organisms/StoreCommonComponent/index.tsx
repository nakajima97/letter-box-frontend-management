import { FC } from 'react';
import { Box } from '@mui/system';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Message from '../Message';

const mainStyle = {
  width: '100%',
  height: 'calc(100vh - 64px);',
  marginTop: '64px',
};

const Index: FC = ({ children }) => (
  <>
    <Message />
    <Box sx={{ display: 'flex' }}>
      <header>
        <Header />
      </header>
      <Sidebar />
      <Box component="main" sx={mainStyle}>
        {children}
      </Box>
    </Box>
  </>
);

export default Index;
