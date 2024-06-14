import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

// Correct import path
import contactImage from '../assets/images/contact-image.png';

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

const ContactImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

const ContactGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const ContactItem = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const Contact = () => {
  return (
    <Root>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Header variant="h4">Contact</Header>
            <Typography variant="body1">
              If you have any questions or need support, please reach out to us at:
            </Typography>
            <Typography variant="body1" style={{ marginTop: '16px' }}>
              XXXXXX@piguardian.org
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactImage
              src={contactImage}
              alt="Contact"
            />
          </Grid>
        </Grid>
        <ContactGrid container spacing={4}>
          <ContactItem item xs={12} sm={6} md={3}>
            <Typography variant="h6">Customer Support</Typography>
            <Typography variant="body2">We are here to help with any issues or questions you may have.</Typography>
          </ContactItem>
          <ContactItem item xs={12} sm={6} md={3}>
            <Typography variant="h6">Technical Assistance</Typography>
            <Typography variant="body2">Get in touch for troubleshooting and support.</Typography>
          </ContactItem>
          <ContactItem item xs={12} sm={6} md={3}>
            <Typography variant="h6">Feedback</Typography>
            <Typography variant="body2">We value your feedback and suggestions!</Typography>
          </ContactItem>
        </ContactGrid>
      </Container>
    </Root>
  );
};

export default Contact;
