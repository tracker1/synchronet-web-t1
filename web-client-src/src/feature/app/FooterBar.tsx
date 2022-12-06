import React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import { useThemeActions, useThemeSlice } from '../../theme/theme-hooks';
import '../../types';

export default () => {
  const { mode } = useThemeSlice();
  const themeAction = useThemeActions();
  const isDark = mode === "dark";

  return (
    <footer>
      <AppBar
        position="relative"
        sx={{
          flexGrow: 1,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar variant="dense" sx={{
          backgroundColor: (theme) => isDark ? "#292929" : theme.palette.brightBlack.main
        }}>
          <Stack
            direction="row"
            spacing={3}
            style={{
              flexGrow: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>TODO: FOOTER</div>
            <IconButton
              size="large"
              title={isDark ? "Switch to light mode." : "Switch to dark mode."}
              aria-label={isDark ? "Switch to light mode." : "Switch to dark mode."}
              color="inherit"
              onClick={themeAction.toggleDarkMode}
            >
              {isDark ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </footer>
  )
}