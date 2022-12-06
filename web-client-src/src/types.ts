import '@mui/material/styles';
import { PaletteColor, PaletteColorOptions } from '@mui/material/styles';
import { egaPalette } from './theme/palette';

declare module '@mui/material/styles' {
  interface Theme {
    colors: Record<keyof egaPalette, string>,
  }

  interface ThemeOptions {
    colors: Record<keyof egaPalette, string>,
  }

  interface Palette {
    monoAmberPalette: PaletteColor,
    monoGreenPalette: PaletteColor,

    // egaPalette
    black: PaletteColor,
    blue: PaletteColor,
    green: PaletteColor,
    cyan: PaletteColor,
    red: PaletteColor,
    magenta: PaletteColor,
    yellow: PaletteColor,
    brown: PaletteColor,
    white: PaletteColor,
    lightGray: PaletteColor,
    brightBlack: PaletteColor,
    brightBlue: PaletteColor,
    brightGreen: PaletteColor,
    brightCyan: PaletteColor,
    brightRed: PaletteColor,
    brightMagenta: PaletteColor,
    brightYellow: PaletteColor,
    brightWhite: PaletteColor,
  }

  interface PaletteOptions {
    monoAmberPalette: PaletteColorOptions,
    monoGreenPalette: PaletteColorOptions,

    // egaPalette
    black: PaletteColorOptions,
    blue: PaletteColorOptions,
    green: PaletteColorOptions,
    cyan: PaletteColorOptions,
    red: PaletteColorOptions,
    magenta: PaletteColorOptions,
    yellow: PaletteColorOptions,
    brown: PaletteColorOptions,
    white: PaletteColorOptions,
    lightGray: PaletteColorOptions,
    brightBlack: PaletteColorOptions,
    brightBlue: PaletteColorOptions,
    brightGreen: PaletteColorOptions,
    brightCyan: PaletteColorOptions,
    brightRed: PaletteColorOptions,
    brightMagenta: PaletteColorOptions,
    brightYellow: PaletteColorOptions,
    brightWhite: PaletteColorOptions,
  }
}