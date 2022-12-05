import React from 'react';
import Box from '@mui/material/Box';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';
import SideMenu from './SideMenu';

export const App: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      alignSelf: 'stretch',
      alignItems: 'stretch'
    }}>
      <HeaderBar />
      <Box style={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'stretch',
      }}>
        <SideMenu />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}>
          {children}
        </div>

      </Box>
      <FooterBar />
    </Box>
  );
}
