import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from './useAuth';

export const useAuthCheck = () => {
  const { isSignIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignIn()) {
      router.push('login');
    }
  });
};
