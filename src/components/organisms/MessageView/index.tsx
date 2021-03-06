import { FC, useState, useEffect, useMemo } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import dayjs from 'dayjs';
import MessageList from '../../molecules/MessageList';
import Loading from '../../molecules/Loading';
import createAxiosClient from '../../../api/client';
import MessageType from '../../../types/messageType';

type ResponseType = {
  data: {
    message: string;
    data: [MessageType];
  };
};

type Props = {
  type: 'store' | 'employee';
  id: number;
};

const container = {
  width: '100%',
  margin: '10px',
};

const Index: FC<Props> = ({ type, id }) => {
  const [messages, setMessages] = useState<MessageType[] | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState(true);
  const axiosClient = useMemo(() => createAxiosClient(), []);

  useEffect(() => {
    axiosClient
      .get(`messages?${type}_id=${id}`)
      .then((res: ResponseType) => {
        if (res.data.message !== 'No data') {
          setMessages(
            res.data.data.map((d) => ({
              ...d,
              createdAt: dayjs(d.createdAt),
              updateAt: dayjs(d.updateAt),
            })),
          );
        }
      })
      // eslint-disable-next-line
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [axiosClient, type, id]);

  const ScreenAfterLoading: FC = () => (
    <>
      {messages ? (
        <MessageList messages={messages} />
      ) : (
        <Typography>メッセージは0件です。</Typography>
      )}
    </>
  );

  return (
    <>
      <Box sx={container}>
        <Typography gutterBottom color="textPrimary">
          メッセージ一覧
        </Typography>
        {isLoading ? <Loading /> : <ScreenAfterLoading />}
      </Box>
    </>
  );
};

export default Index;
