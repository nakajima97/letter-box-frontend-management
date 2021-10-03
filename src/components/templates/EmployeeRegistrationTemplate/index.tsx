import { FC } from 'react';

import EmployeeRegistrationForm from '../../organisms/EmployeeRegistrationForm';
import StoreCommonComponent from '../../organisms/StoreCommonComponent';

const Index: FC = () => (
  <>
    <StoreCommonComponent>
      <EmployeeRegistrationForm />
    </StoreCommonComponent>
  </>
);

export default Index;
