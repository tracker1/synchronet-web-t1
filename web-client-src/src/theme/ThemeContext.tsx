import React from 'react';
import { Theme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from './theme';
import '../types';

const InnerThemeContext = React.memo(({ theme, children }: { theme: Theme, children: any }) => {
  console.log('theme', theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
})

export const ThemeContext: React.FC<{ children: any }> = ({ children }) => {
  const theme = useTheme();
  return <InnerThemeContext theme={theme}>{children}</InnerThemeContext>;
}