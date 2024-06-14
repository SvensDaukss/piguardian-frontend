import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

// Correct import path
import servicesImage from '../assets/images/services-image.png';

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

const ServicesImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

const ServiceGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const ServiceItem = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const Services = () => {
  return (
    <Root>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Header variant="h4">Services</Header>
            <Typography variant="body1">
              At PiGuardian, we offer a range of services to ensure you are secure and protected at all times. Explore our services to find the best solutions for your needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ServicesImage
              src={servicesImage}
              alt="Services"
            />
          </Grid>
        </Grid>
        <ServiceGrid container spacing={4}>
          <ServiceItem item xs={12} sm={6} md={3}>
            <Typography variant="h6">24/7, 365 Monitoring</Typography>
            <Typography variant="body2">Round-the-clock surveillance...</Typography>
          </ServiceItem>
          <ServiceItem item xs={12} sm={6} md={3}>
            <Typography variant="h6">Installation Services</Typography>
            <Typography variant="body2">Documentation to support installation of security systems.</Typography>
          </ServiceItem>
          <ServiceItem item xs={12} sm={6} md={3}>
            <Typography variant="h6">Accessibility</Typography>
            <Typography variant="body2">Access your security dashboard from anywhere with our web interface.</Typography>
          </ServiceItem>
          <ServiceItem item xs={12} sm={6} md={3}>
            <Typography variant="h6">Emergency Response</Typography>
            <Typography variant="body2">Immediate response to any security breaches or alarms.</Typography>
          </ServiceItem>
        </ServiceGrid>
      </Container>
    </Root>
  );
};

export default Services;
