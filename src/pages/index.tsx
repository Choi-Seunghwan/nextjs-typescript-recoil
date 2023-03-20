import WithAuth from '@components/templates/withAuth';
import WithLayout from '@components/templates/withLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from 'src/hooks/useAuth';
import { useAuthCheck } from 'src/hooks/useAuthCheck';

const Home = () => {
  useAuthCheck();

  return (
    <>
      <h3>홈</h3>
    </>
  );
};

export default WithLayout(Home);
