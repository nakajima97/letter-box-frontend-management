import { FC } from 'react';

import EmployeeListView from '../../organisms/EmployeeListView';
import StoreCommonComponent from '../../organisms/StoreCommonComponent';

const Index: FC = () => (
  <>
    <StoreCommonComponent>
      <EmployeeListView />
    </StoreCommonComponent>
  </>
);

export default Index;
