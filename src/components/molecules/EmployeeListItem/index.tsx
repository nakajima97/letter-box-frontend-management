import { FC } from 'react';
import { Divider, ListItem, ListItemText, ListItemButton } from '@mui/material';

type Props = {
  id: number;
  firstName: string;
  lastName: string;
  onClick: (employeeId: number) => void;
};

const item = {
  padding: '8px',
};

const Index: FC<Props> = ({ id, firstName, lastName, onClick }) => (
  <>
    <ListItem sx={item} key={id}>
      <ListItemButton onClick={() => onClick(id)}>
        <ListItemText primary={`${firstName} ${lastName}`} />
      </ListItemButton>
    </ListItem>
    <Divider />
  </>
);

export default Index;
