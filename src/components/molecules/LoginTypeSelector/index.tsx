import { FC } from 'react';

import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

const Index: FC = () => (
  <>
    <RadioGroup>
      <FormControlLabel
        value="store"
        label="店舗IDでログイン"
        control={<Radio />}
      />
      <FormControlLabel
        value="employee"
        label="従業員IDでログイン"
        control={<Radio />}
      />
    </RadioGroup>
  </>
);

export default Index;
