import { FC } from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

import LoginType from '../../../types/loginTypes';

type Props = {
  value: LoginType;
  onChange: React.Dispatch<React.SetStateAction<LoginType>>;
};

const Index: FC<Props> = ({ value, onChange }) => (
  <>
    <RadioGroup
      value={value}
      onChange={(e) => onChange(e.target.value as LoginType)}
    >
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
