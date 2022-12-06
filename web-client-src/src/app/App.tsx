import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';
import SideMenu from './SideMenu';

export const App: React.FC<{ children: any, title: string, sectionMenu?: any }> = ({ children, title, sectionMenu }) => {
  useEffect(() => {
    document.title = `${title} - System Name BBS` || 'System Name BBS';
  }, [title]);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      alignSelf: 'stretch',
      alignItems: 'stretch'
    }}>
      <HeaderBar title={title} />
      <Box style={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'stretch',
      }}>
        <SideMenu sectionMenu={sectionMenu} />
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
