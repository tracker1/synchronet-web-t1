import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../state/store';
import '../types';

const storageKey = 'theme-mode';
const browserDefault = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
const defaultMode = localStorage.getItem(storageKey) || browserDefault;

export interface ThemeState {
  mode: 'dark' | 'light';
}

const initialState: ThemeState = {
  mode: defaultMode === 'dark' ? 'dark' : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = state.mode == 'dark' ? 'light' : 'dark';
      if (state.mode === browserDefault) {
        localStorage.removeItem(storageKey);
      } else {
        localStorage.setItem(storageKey, state.mode);
      }
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export const selectMode = (state: AppState) => state.theme.mode;

export default themeSlice.reducer;
