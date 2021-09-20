import { FC, useContext, useEffect } from 'react';

import StoreManagementTemplate from '../../templates/StoreManagementTemplate';
import { AuthContext } from '../../../contexts/Auth';
import createAxiosClient from '../../../api/client';

type UserIdResponseType = {
  data: {
    userId: string;
  };
};

const Index: FC = () => {
  const { setLoggedInUserId } = useContext(AuthContext);
  const axiosClient = createAxiosClient();

  useEffect(() => {
    axiosClient('check/user_id')
      .then((res: UserIdResponseType) => {
        if (res.data.userId === 'none') {
          setLoggedInUserId(undefined);
        } else {
          setLoggedInUserId(res.data.userId);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  });

  return (
    <>
      <StoreManagementTemplate />
    </>
  );
};

export default Index;
