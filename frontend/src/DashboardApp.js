import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './Theme';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import DashboardRedirectHandler from './components/DashboardRedirectHandler';
import NotFound from './pages/NotFound';
import DashboardNavbar from './components/DashboardNavbar'; // Import DashboardNavbar

const DashboardApp = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Content />
      </Router>
    </ThemeProvider>
  );
};

const Content = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <DashboardNavbar />}
      <Routes>
        <Route path="/" element={<DashboardRedirectHandler />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:uuid/*" element={<PrivateRoute><DashboardRoutes /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

// Component to handle nested routes under /:uuid
const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} /> {/* Catch all for 404 under /:uuid */}
    </Routes>
  );
};

export default DashboardApp;
