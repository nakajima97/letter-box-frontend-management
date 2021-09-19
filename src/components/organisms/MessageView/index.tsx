import { FC, useState, useEffect, useContext, useMemo } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';

import dayjs from 'dayjs';
import MessageList from '../../molecules/MessageList';
import createAxiosClient from '../../../api/client';
import { AuthContext } from '../../../contexts/Auth';
import MessageType from '../../../types/messageType';

type ResponseType = {
  data: {
    // eslint-disable-next-line
    message: string;
    data: [MessageType];
  };
};

const container = css`
  width: 100%;
  margin: 10px;
`;

const Index: FC = () => {
  const [messages, setMessages] = useState<MessageType[] | undefined>(
    undefined,
  );
  const { loggedInUserId, loggedInType } = useContext(AuthContext);
  const axiosClient = useMemo(() => createAxiosClient(), []);

  useEffect(() => {
    if (loggedInType) {
      const params = {
        [`${loggedInType}_id`]: loggedInUserId,
      };

      axiosClient
        .get('messages', params)
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
        .catch((err) => console.log(err));
    }
  }, [loggedInType, loggedInUserId, axiosClient]);

  return (
    <div css={container}>
      <Typography gutterBottom color="textPrimary">
        メッセージ一覧
      </Typography>
      {messages && <MessageList messages={messages} />}
    </div>
  );
};

export default Index;
