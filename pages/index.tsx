import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  const path = router.pathname;
  useEffect(() => {
    if (path == '/') {
      router.push('/upcoming', undefined, { shallow: true });
    }
  }, [path, router]);
  return <></>;
};

export default Home;
