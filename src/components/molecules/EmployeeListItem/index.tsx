import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Divider, ListItem, ListItemText } from '@mui/material';

type Props = {
  firstName: string;
  lastName: string;
};

const item = css`
  padding: 8px;
`;

const Index: FC<Props> = ({ firstName, lastName }) => (
  <>
    <ListItem css={item}>
      <ListItemText primary={`${firstName} ${lastName}`} />
    </ListItem>
    <Divider />
  </>
);

export default Index;
