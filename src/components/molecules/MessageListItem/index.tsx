import { FC } from 'react';
import dayjs from 'dayjs';
import { ListItem, Typography, Divider, ListItemText } from '@material-ui/core';

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
      <ListItem>
        <ListItemText primary={text} />
      </ListItem>
      <Divider />
    </>
  );
};

export default Index;
