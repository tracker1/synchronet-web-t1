import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useThemeActions, useThemeSlice } from '../../theme/theme-hooks';

function HideOnScroll({ children }: { children: any }) {
  const trigger = useScrollTrigger({
    threshold: 64,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const HeaderBar: React.FC<{ title: string }> = ({ title }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { mode } = useThemeSlice();
  const themeAction = useThemeActions();
  const isDark = mode === "dark";

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <HideOnScroll>
        <AppBar color="primary" enableColorOnDark sx={{ flexGrow: 1, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <div>
              <IconButton
                size="large"
                title={isDark ? "Switch to light mode." : "Switch to dark mode."}
                aria-label={isDark ? "Switch to light mode." : "Switch to dark mode."}
                color="inherit"
                onClick={themeAction.toggleDarkMode}
              >
                {isDark ? <DarkMode /> : <LightMode />}
              </IconButton>
            </div>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                // transformOrigin={{
                //   vertical: 'bottom',
                //   horizontal: 'right',
                // }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Create Account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </header>
  );
}

export default HeaderBar;