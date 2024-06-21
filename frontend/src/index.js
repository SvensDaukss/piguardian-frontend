import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DashboardApp from './DashboardApp'; // Import DashboardApp
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './Theme';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

const hostname = window.location.hostname;

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <AuthProvider> {/* Wrap App with AuthProvider */}
      {hostname === 'dashboard.piguardian.org' ? <DashboardApp /> : <App />}
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
