import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DashboardRedirectHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.uuid) {
          router.push(`/${data.uuid}`);
        } else {
          router.push('/login');
        }
      })
      .catch(() => router.push('/login'));
    }
  }, [router]);

  return null;
};

export default DashboardRedirectHandler;
