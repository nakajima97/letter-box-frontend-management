import { FC } from 'react';
import {
  Drawer,
  ListItem,
  List,
  ListItemText,
  Toolbar,
  ListItemIcon,
} from '@mui/material';
import { Box } from '@mui/system';
import { Mail } from '@mui/icons-material';

const drawerWidth = 240;

const Index: FC = () => (
  <>
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="メッセージ" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  </>
);

export default Index;
