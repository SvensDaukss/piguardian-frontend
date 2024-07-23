import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [router, token]);

  if (!token) {
    return null; // or a loading spinner or something else while the redirect happens
  }

  return <>{children}</>;
};

export default PrivateRoute;
