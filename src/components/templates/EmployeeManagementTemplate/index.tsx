import { FC } from 'react';
import { Box } from '@mui/system';

import Header from '../../organisms/Header';
import MessageView from '../../organisms/MessageView';

const mainStyle = {
  width: '100%',
  height: 'calc(100vh - 64px);',
  marginTop: '64px',
};

type Props = {
  id: number;
};

const index: FC<Props> = ({ id }) => (
  <>
    <header>
      <Header />
    </header>
    <Box component="main" sx={mainStyle}>
      <MessageView type="employee" id={id} />
    </Box>
  </>
);

export default index;
