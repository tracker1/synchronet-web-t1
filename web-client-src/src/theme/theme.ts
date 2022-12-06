import { useMemo } from 'react';
import { createTheme, PaletteOptions } from '@mui/material/styles';
import { egaPalette, monoAmberPalette, monoGreenPalette } from './palette';
import { useThemeSlice } from './theme-hooks';
import '../types';

const augmentColor = createTheme().palette.augmentColor;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });

const paletteColors: Partial<PaletteOptions> = Object.entries(egaPalette).reduce(
  (o, [key, value]) => Object.assign(o, { [key]: createColor(value) }),
  {}
);

export const useTheme = () => {
  const { mode } = useThemeSlice();
  const isDark = (mode === "dark");

  const dependencies = [mode];
  return useMemo(
    () => createTheme({
      colors: egaPalette as any,
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
          paper: isDark ? '#111111' : '#efefef',
        },
        text: {
          primary: isDark ? egaPalette.lightGray : egaPalette.black,
        },
        ...paletteColors,
        monoAmberPalette,
        monoGreenPalette,
        primary: {
          main: isDark ? egaPalette.cyan : egaPalette.magenta,
          // contrastText: isDark ? "rgba(0, 0, 0, 0.87)" : "rgba(255, 255, 255, 0.87)",
        },
        secondary: {
          main: isDark ? egaPalette.magenta : egaPalette.cyan,
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
      } as PaletteOptions,
    }),
    dependencies)
};