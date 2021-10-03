import { FC } from 'react';
import { Box } from '@mui/system';

import Header from '../../organisms/Header';
import EmployeeListView from '../../organisms/EmployeeListView';
import Sidebar from '../../organisms/Sidebar';

const mainStyle = {
  flexGrow: 1,
  p: 3,
  marginTop: '64px',
};

const Index: FC = () => (
  <>
    <Box sx={{ display: 'flex' }}>
      <header>
        <Header />
      </header>
      <Sidebar />
      <Box component="main" sx={mainStyle}>
        <EmployeeListView />
      </Box>
    </Box>
  </>
);

export default Index;
