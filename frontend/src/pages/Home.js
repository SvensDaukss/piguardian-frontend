import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SecurityIcon from '@mui/icons-material/Security';
import { Link } from 'react-router-dom';

// Correct import path
import homeImage from '../assets/images/home-image.png';

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: '#000511',
  color: '#fff',
  minHeight: '100vh',
  padding: theme.spacing(4),
}));

const Header = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const MainImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

const FeatureGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const FeatureItem = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const FeatureIcon = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  marginBottom: theme.spacing(1),
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#00bfa6',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#008c7a',
  },
  marginTop: theme.spacing(2),
}));

const Home = () => {
  return (
    <Root>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Header variant="h4">Get Started Today!</Header>
              <SignUpButton variant="contained" size="large" component={Link} to="/signup">
                Sign Up
              </SignUpButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainImage
              src={homeImage}
              alt="Home"
            />
          </Grid>
        </Grid>
        <FeatureGrid container spacing={4}>
          <FeatureItem item xs={12} sm={6} md={3}>
            <FeatureIcon><VisibilityIcon fontSize="large" /></FeatureIcon>
            <Typography variant="h6">Quality</Typography>
            <Typography variant="body2">Images, video, stream, and security.</Typography>
          </FeatureItem>
          <FeatureItem item xs={12} sm={6} md={3}>
            <FeatureIcon><Brightness3Icon fontSize="large" /></FeatureIcon>
            <Typography variant="h6">Vision</Typography>
            <Typography variant="body2">See clearly even in complete darkness.</Typography>
          </FeatureItem>
          <FeatureItem item xs={12} sm={6} md={3}>
            <FeatureIcon><SmartphoneIcon fontSize="large" /></FeatureIcon>
            <Typography variant="h6">Access</Typography>
            <Typography variant="body2">Monitor your system from anywhere.</Typography>
          </FeatureItem>
          <FeatureItem item xs={12} sm={6} md={3}>
            <FeatureIcon><SecurityIcon fontSize="large" /></FeatureIcon>
            <Typography variant="h6">Secure</Typography>
            <Typography variant="body2">Security features to protect your data.</Typography>
          </FeatureItem>
        </FeatureGrid>
      </Container>
    </Root>
  );
};

export default Home;
