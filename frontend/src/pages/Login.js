import React, { useState, useContext } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import axios from '../axios';
import { AuthContext } from '../context/AuthContext';

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

const FormContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const FormField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    color: '#fff',
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: '#fff',
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#00bfa6',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#008c7a',
  },
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting Login:', { email, password });
      const response = await axios.post('/auth/login', { email, password });
      const { token, uuid } = response.data;
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
      window.location.href = `https://dashboard.piguardian.org/${uuid}`;
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      alert(`Login failed: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  return (
    <Root>
      <Container maxWidth="sm">
        <Header variant="h4">Login</Header>
        <FormContainer component="form" onSubmit={handleSubmit}>
          <FormField
            variant="outlined"
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            InputProps={{
              style: { color: '#fff' },
            }}
          />
          <FormField
            variant="outlined"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            InputProps={{
              style: { color: '#fff' },
            }}
          />
          <SubmitButton
            type="submit"
            variant="contained"
            fullWidth
          >
            Login
          </SubmitButton>
        </FormContainer>
      </Container>
    </Root>
  );
};

export default Login;
