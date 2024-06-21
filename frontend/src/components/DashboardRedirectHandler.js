import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.uuid) {
          navigate(`/${data.uuid}`);
        } else {
          navigate('/login');
        }
      })
      .catch(() => navigate('/login'));
    }
  }, [navigate]);

  return null;
};

export default DashboardRedirectHandler;
