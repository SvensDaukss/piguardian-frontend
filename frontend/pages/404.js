import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/system';

const NotFoundContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#000511',
  color: '#fff',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const ReturnHomeButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#00bfa6',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#008c7a',
  },
}));

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
      <Link href="/" passHref>
        <ReturnHomeButton variant="contained">
          Go to Home
        </ReturnHomeButton>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFound;
