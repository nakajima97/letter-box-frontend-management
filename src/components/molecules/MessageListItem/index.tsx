import { FC } from 'react';
import dayjs from 'dayjs';
import { Typography } from '@material-ui/core';

type Props = {
  date: dayjs.Dayjs;
  message: string;
};

const Index: FC<Props> = ({ date, message }) => (
  <div>
    <Typography>{date.format('YYYY-MM-DD')}</Typography>
    <Typography>{message}</Typography>
  </div>
);

export default Index;