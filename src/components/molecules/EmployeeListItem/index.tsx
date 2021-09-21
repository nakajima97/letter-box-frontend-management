import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Divider, ListItem, ListItemText, ListItemButton } from '@mui/material';

type Props = {
  id: number;
  firstName: string;
  lastName: string;
  onClick: (employeeId: number) => void;
};

const item = css`
  padding: 8px;
`;

const Index: FC<Props> = ({ id, firstName, lastName, onClick }) => (
  <>
    <ListItem css={item} key={id}>
      <ListItemButton onClick={() => onClick(id)}>
        <ListItemText primary={`${firstName} ${lastName}`} />
      </ListItemButton>
    </ListItem>
    <Divider />
  </>
);

export default Index;
