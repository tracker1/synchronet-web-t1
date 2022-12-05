import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default () => (
  <footer>
    <AppBar position="relative" sx={{ flexGrow: 1, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar variant="dense" color="primary">
        TODO: FOOTER
      </Toolbar>
    </AppBar>
  </footer>
)