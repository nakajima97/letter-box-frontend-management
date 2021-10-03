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
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const Index: FC = () => {
  const history = useHistory();

  const onClickMail = () => {
    history.push('/store');
  };

  const onClickEmployeeRegistration = () => {
    history.push('/store/employee/registration');
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
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="メッセージ" />
            </ListItem>
          </List>
          <List>
            <ListItem button onClick={onClickEmployeeRegistration}>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="従業員登録" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Index;
