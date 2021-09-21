import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import MessageListTemplate from '../../templates/MessageListTemplate';

type Params = {
  id: string | undefined;
};

const Index: FC = () => {
  const { id } = useParams<Params>();

  return <MessageListTemplate id={Number(id)} />;
};

export default Index;
