import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import CopyrightIcon from '@mui/icons-material/Copyright';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#000511',
  color: '#fff',
  padding: theme.spacing(4),
  marginTop: theme.spacing(0),
  textAlign: 'center',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
          <CopyrightIcon fontSize="small" sx={{ marginRight: '4px' }} /> 2024 PiGuardian. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
