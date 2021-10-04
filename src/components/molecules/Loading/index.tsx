import { FC } from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const Index: FC = () => (
  <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress size={80} />
    </Box>
  </>
);

export default Index;
