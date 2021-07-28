import { FC } from 'react';

import Header from '../../organisms/Header';
import EmployeeMessageView from '../../organisms/EmployeeMessageView';

const index: FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <EmployeeMessageView />
    </main>
  </>
);

export default index;
