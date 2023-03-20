/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useAuth } from 'src/hooks/useAuth';
import { authState } from 'src/store/auth.state';

const WithAuth = (Component: FC) => {
  const { isSignIn } = useAuth();
  const router = useRouter();

  // if (!token) {
  //   router.push('login');
  // }

  return (props: any) => <Component {...props} />;
};
export default WithAuth;
