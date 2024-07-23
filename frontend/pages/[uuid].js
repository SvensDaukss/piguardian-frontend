import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';  // Ensure the path is correct
import { useRouter } from 'next/router';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: '#000511',
  color: '#fff',
  minHeight: '100vh',
  padding: theme.spacing(4),
}));

const Header = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  marginBottom: theme.spacing(2),
}));

const LoadingScreen = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000511',
  color: '#fff',
  minHeight: '100vh',
  padding: theme.spacing(4),
}));

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { uuid } = router.query;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/auth/me`);
        console.log('User data fetched:', response.data);
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user:', error.response ? error.response.data : error.message);
        router.push('/login');
      }
    };
    fetchUser();
  }, [router]);

  if (!user) {
    return (
      <LoadingScreen>
        <Typography variant="h4">Loading...</Typography>
      </LoadingScreen>
    );
  }

  return (
    <Root>
      <Container maxWidth="lg">
        <Header variant="h4">Dashboard</Header>
        <Typography variant="body1">Email: {user.email}</Typography>
        <Typography variant="body1">Name: {user.first_name} {user.last_name}</Typography>
        <Typography variant="body2">UUID: {user.uuid}</Typography>
      </Container>
    </Root>
  );
};

export default Dashboard;
