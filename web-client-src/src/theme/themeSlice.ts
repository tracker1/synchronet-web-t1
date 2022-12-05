import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, AppThunk } from '../state/store';

export interface ThemeState {
  mode: 'dark' | 'light';
}

const initialState: ThemeState = {
  mode: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = state.mode == 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export const selectMode = (state: AppState) => state.theme.mode;

export default themeSlice.reducer;
