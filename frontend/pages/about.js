import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image'; // Import Image from next/image
import Navbar from '../components/Navbar'; // Import Navbar

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

const AboutImage = styled(Image)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

const ContentGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const ContentItem = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const About = () => {
  return (
    <Root>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Header variant="h4">About</Header>
            <Typography variant="body1">
              PiGuardian is dedicated to providing high-quality security solutions. Our mission is to ensure you are safe and secure, day and night.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <AboutImage src="/images/about-image.png" alt="About" layout="responsive" width={400} height={400} />
          </Grid>
        </Grid>
        <ContentGrid container spacing={4}>
          <ContentItem item xs={12} sm={6} md={3}>
            <Typography variant="h6">Mission</Typography>
            <Typography variant="body2">Reliable and affordable security solutions.</Typography>
          </ContentItem>
          <ContentItem item xs={12} sm={6} md={3}>
            <Typography variant="h6">Vision</Typography>
            <Typography variant="body2">Safe and secure.</Typography>
          </ContentItem>
          <ContentItem item xs={12} sm={6} md={3}>
            <Typography variant="h6">Values</Typography>
            <Typography variant="body2">Integrity and Innovation.</Typography>
          </ContentItem>
          <ContentItem item xs={12} sm={6} md={3}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">Reach out to us for any questions or support.</Typography>
          </ContentItem>
        </ContentGrid>
      </Container>
    </Root>
  );
};

export default About;
