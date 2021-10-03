import { FC } from 'react';
import { Box } from '@mui/system';

import Header from '../../organisms/Header';

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
      従業員登録ページ
    </Box>
  </>
);

export default Index;
