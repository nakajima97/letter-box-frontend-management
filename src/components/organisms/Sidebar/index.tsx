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
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const Index: FC = () => {
  const history = useHistory();

  const onClickMail = () => {
    history.push('/store');
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button onClick={onClickMail}>
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
};

export default Index;
