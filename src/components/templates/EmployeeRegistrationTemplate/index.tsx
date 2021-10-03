import { FC } from 'react';
import { Box } from '@mui/system';

import Header from '../../organisms/Header';
import EmployeeRegistrationForm from '../../organisms/EmployeeRegistrationForm';

const mainStyle = {
  width: '100%',
  height: 'calc(100vh - 64px);',
  marginTop: '64px',
};

const Index: FC = () => (
  <>
    <header>
      <Header />
    </header>
    <Box component="main" sx={mainStyle}>
      <EmployeeRegistrationForm />
    </Box>
  </>
);

export default Index;
