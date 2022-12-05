import React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import { useThemeActions, useThemeSlice } from '../theme/theme-hooks';

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
          backgroundColor: (theme) => isDark ? theme.palette.background.paper : theme.palette.brightBlack.main
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
            <Button color={isDark ? "white" : "brightWhite"} onClick={themeAction.toggleDarkMode}>
              {isDark ? <DarkMode /> : <LightMode />}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </footer>
  )
}