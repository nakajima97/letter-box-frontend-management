import { FC, useState } from 'react';

import LoginTypeSelector from './index';
import LoginType from '../../../types/loginTypes';

export default {
  component: LoginTypeSelector,
  title: 'molecules/LoginTypeSelector',
};

export const Default: FC = () => {
  const [value, setValue] = useState<LoginType>('store');

  return <LoginTypeSelector value={value} onChange={setValue} />;
};
