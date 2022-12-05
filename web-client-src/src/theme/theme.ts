import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { egaPalette } from './palette';

const paletteColors = Object.entries(egaPalette).reduce(
  (o, [key, value]) => Object.assign(o, { [key]: ({ main: value }) }),
  {}
);

export const useTheme = () => {
  // can use redux selectors, etc here,
  return useMemo(
    () => createTheme({
      colors: { ...egaPalette },
      shape: {
        borderRadius: 4,
      },
      palette: {
        mode: 'dark',
        background: {
          default: egaPalette.brightBlack,
          paper: '#080808',
        },
        text: {
          primary: egaPalette.lightGray,
        },
        ...paletteColors,
        primary: {
          main: egaPalette.cyan,
          contrastText: "rgba(255, 255, 255, 0.87)",
        },
        secondary: {
          main: egaPalette.magenta,
          contrastText: "rgba(255, 255, 255, 0.87)",
        },
        success: {
          main: egaPalette.green,
        },
        info: {
          main: egaPalette.cyan,
        },
        warning: {
          main: egaPalette.brown,
        },
        error: {
          main: egaPalette.red,
        },
      }
    }),
    [
      // TODO: theme dependencies go here
    ])
};