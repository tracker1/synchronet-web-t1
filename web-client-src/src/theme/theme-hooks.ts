import { createActionsHook } from '../hooks/react-redux-actions-hook';
import { useAppSelector } from '../state';
import { toggleDarkMode } from './themeSlice';
import '../types';

export const useThemeSlice = () => useAppSelector(state => state.theme);

export const useThemeActions = createActionsHook({
  toggleDarkMode
});
