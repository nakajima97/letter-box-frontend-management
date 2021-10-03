import { FC } from 'react';
import { Box } from '@mui/system';

import Header from '../../organisms/Header';
import Sidebar from '../../organisms/Sidebar';
import EmployeeRegistrationForm from '../../organisms/EmployeeRegistrationForm';

const mainStyle = {
  width: '100%',
  height: 'calc(100vh - 64px);',
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
        <EmployeeRegistrationForm />
      </Box>
    </Box>
  </>
);

export default Index;
