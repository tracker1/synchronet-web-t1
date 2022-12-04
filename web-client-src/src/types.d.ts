import { egaPalette } from './theme/palette'

declare module '*.css';
declare module '*.scss';
declare module '*.jpg';
declare module '*.png';
declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: Dictionary<egaPalette, string>,
  }

  interface Palette {
    [egaPalette]: Palette['primary']
  }
  interface PaletteOptions {
    [egaPalette]: PaletteOptions['primary']
  }

  interface ThemeOptions {
    colors: Dictionary<egaPalette, string>,
  }
}