import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Container, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/images/PiGuardian-logo-banner.png';

const Logo = styled('img')(({ theme }) => ({
  maxHeight: '40px',
  marginRight: theme.spacing(0),
}));

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#00bfa6',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#008c7a',
  },
}));

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleLoginRedirect = () => {
    window.location.href = 'https://dashboard.piguardian.org/login';
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#000511' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Button color="inherit" component={Link} to="/">
            <Logo src={logo} alt="PiGuardian Logo" />
          </Button>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
              >
                <MenuIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              {isLoggedIn ? (
                <Button onClick={handleLogout} style={{ backgroundColor: '#00bfa6', color: '#fff' }}>
                  Log out
                </Button>
              ) : (
                <LoginButton onClick={handleLoginRedirect}>Log in</LoginButton>
              )}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose} component={Link} to="/about">About</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/services">Services</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact</MenuItem>
              </Menu>
            </>
          ) : (
            <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/services">Services</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
              </div>
              {isLoggedIn ? (
                <Button onClick={handleLogout} style={{ backgroundColor: '#00bfa6', color: '#fff' }}>
                  Log out
                </Button>
              ) : (
                <LoginButton onClick={handleLoginRedirect}>Log in</LoginButton>
              )}
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
