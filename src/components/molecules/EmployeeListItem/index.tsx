import { FC } from 'react';

type Props = {
  name: string;
};

const Index: FC<Props> = ({ name }) => <div>{name}</div>;

export default Index;
