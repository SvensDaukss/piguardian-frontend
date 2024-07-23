import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Container, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/piguardian-logo-banner.png';

const Logo = styled(Image)(({ theme }) => ({
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
  const [isMobile, setIsMobile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(!!localStorage.getItem('token'));
    }
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      router.push('/login');
    }
  };

  const handleLoginRedirect = () => {
    router.push('https://dashboard.piguardian.org/login');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#202F3F', margin: 0, padding: 0, width: '100%' }}>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <Toolbar disableGutters style={{ justifyContent: 'center' }}>
          <Box style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1200px', justifyContent: 'space-between' }}>
            <Link href="/" passHref>
              <Button color="inherit">
                <Logo src={logo} alt="PiGuardian Logo" width={204} height={104} />
              </Button>
            </Link>
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
                  <MenuItem onClick={handleMenuClose}>
                    <Link href="/about" passHref>
                      <Button color="inherit">About</Button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link href="/services" passHref>
                      <Button color="inherit">Services</Button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link href="/contact" passHref>
                      <Button color="inherit">Contact</Button>
                    </Link>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ display: 'flex' }}>
                  <Link href="/about" passHref>
                    <Button color="inherit">About</Button>
                  </Link>
                  <Link href="/services" passHref>
                    <Button color="inherit">Services</Button>
                  </Link>
                  <Link href="/contact" passHref>
                    <Button color="inherit">Contact</Button>
                  </Link>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
