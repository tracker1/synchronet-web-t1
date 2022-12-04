import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter, ReduxRouterSelector } from '@lagunovsky/redux-react-router';
import { store, AppState } from './store';
import { history } from './history';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeContext } from '../theme/ThemeContext';

const routerSelector: ReduxRouterSelector<AppState> = (state) => state.route

export const Context: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeContext>
        <ReduxRouter history={history} routerSelector={routerSelector}>
          {children}
        </ReduxRouter>
      </ThemeContext>
    </Provider>
  );
};
