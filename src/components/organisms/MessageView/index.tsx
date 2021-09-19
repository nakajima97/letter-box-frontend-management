import { FC, useState, useEffect, useContext } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';

import MessageList from '../../molecules/MessageList';
import createAxiosClient from '../../../api/client';
import { AuthContext } from '../../../contexts/Auth';

const container = css`
  width: 100%;
  margin: 10px;
`;

const Index: FC = () => {
  // eslint-disable-next-line
  const [message, setMessages] = useState();
  const axiosClient = createAxiosClient();
  const { loggedInUserId, loggedInType } = useContext(AuthContext);

  useEffect(() => {
    if (loggedInType) {
      const params = {
        [`${loggedInType}_id`]: loggedInUserId,
      };

      axiosClient
        .get('messages', params)
        // eslint-disable-next-line
        .then((res) => console.log(res))
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    }
  }, [axiosClient, loggedInType, loggedInUserId]);

  return (
    <div css={container}>
      <Typography gutterBottom color="textPrimary">
        メッセージ一覧
      </Typography>
      <MessageList />
    </div>
  );
};

export default Index;
