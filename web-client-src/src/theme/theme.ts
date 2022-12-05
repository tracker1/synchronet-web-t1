import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { egaPalette, monoAmberPalette, monoGreenPalette } from './palette';
import { useThemeSlice } from './theme-hooks';

const paletteColors = Object.entries(egaPalette).reduce(
  (o, [key, value]) => Object.assign(o, { [key]: ({ main: value }) }),
  {}
);

export const useTheme = () => {
  const { mode } = useThemeSlice();
  const isDark = (mode === "dark");

  const dependencies = [mode];
  return useMemo(
    () => createTheme({
      colors: { ...egaPalette },
      shape: {
        borderRadius: 4,
      },
      typography: {
        fontFamily: "Inconsolata, \"Consolas\", \"Fira Code\", Roboto, Helvetica, Arial, sans-serif",
        fontSize: 16,
      },
      palette: {
        mode,
        background: {
          default: isDark ? egaPalette.brightBlack : egaPalette.lightGray,
          paper: isDark ? '#080808' : '#efefef',
        },
        text: {
          primary: isDark ? egaPalette.lightGray : egaPalette.black,
        },
        ...paletteColors,
        primary: {
          main: egaPalette.blue,
          // contrastText: isDark ? "rgba(0, 0, 0, 0.87)" : "rgba(255, 255, 255, 0.87)",
        },
        secondary: {
          main: egaPalette.magenta,
          // contrastText: isDark ? "rgba(0, 0, 0, 0.87)" : "rgba(255, 255, 255, 0.87)",
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
    dependencies)
};