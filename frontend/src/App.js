import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './Theme';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/Signup';

const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};

const App = () => {
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
  const hideNavbarPaths = ['/signup'];

  React.useEffect(() => {
    const handleRedirect = () => {
      const path = location.pathname.substring(1); // Remove leading slash
      if (isLoggedIn() && path) {
        window.location.href = `https://dashboard.piguardian.org/${path}`;
      }
    };

    handleRedirect();
  }, [location]);

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Navigate to="https://dashboard.piguardian.org/login" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:uuid" element={isLoggedIn() ? <Navigate to={`https://dashboard.piguardian.org${location.pathname}`} /> : <NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
