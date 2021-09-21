import React, { FC } from 'react';

import MessageView from '../../organisms/MessageView';
import Header from '../../organisms/Header';

type Props = {
  id: number;
};

const Index: FC<Props> = ({ id }) => (
  <>
    <Header />
    <MessageView type="employee" id={id} />
  </>
);

export default Index;
