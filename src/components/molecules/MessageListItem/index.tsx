import { FC } from 'react';
import dayjs from 'dayjs';
import { ListItem, Typography, Divider, ListItemText } from '@mui/material';

type Props = {
  date: dayjs.Dayjs;
  message: string;
};

const Index: FC<Props> = ({ date, message }) => {
  const text = (
    <>
      <Typography color="textSecondary">{date.format('YYYY-MM-DD')}</Typography>
      <Typography color="textPrimary">{message}</Typography>
    </>
  );

  return (
    <>
      <ListItem key={date.format('YYYY-MM-DD')}>
        <ListItemText primary={text} />
      </ListItem>
      <Divider />
    </>
  );
};

export default Index;
