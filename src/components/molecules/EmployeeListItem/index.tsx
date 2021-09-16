import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Divider, ListItem, ListItemText } from '@mui/material';

type Props = {
  name: string;
};

const item = css`
  padding: 8px;
`;

const Index: FC<Props> = ({ name }) => (
  <>
    <ListItem css={item}>
      <ListItemText primary={name} />
    </ListItem>
    <Divider />
  </>
);

export default Index;
