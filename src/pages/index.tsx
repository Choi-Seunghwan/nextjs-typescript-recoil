import WithAuth from '@components/templates/withAuth';
import WithLayout from '@components/templates/withLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from 'src/hooks/auth.hook';

const Home = () => {
  const { isSignIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignIn()) {
      router.push('login');
    }
  });

  return (
    <>
      <h3>홈</h3>
    </>
  );
};

export default WithLayout(Home);
