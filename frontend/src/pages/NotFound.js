import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
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
  backgroundColor: '#00bfa6',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#008c7a',
  },
}));

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Container maxWidth="sm">
        <Typography variant="h2" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <ReturnHomeButton component={Link} to="/" variant="contained">
          Go to Home
        </ReturnHomeButton>
      </Container>
    </NotFoundContainer>
  );
};

export default NotFound;
