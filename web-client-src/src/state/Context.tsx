import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter, ReduxRouterSelector } from '@lagunovsky/redux-react-router'
import { store, AppState } from './store';
import { history } from './history'

import '../index.css';

const routerSelector: ReduxRouterSelector<AppState> = (state) => state.route

export const Context: React.FC<{ children: any }> = ({ children }) => {
  console.log("context");

  return (
    <Provider store={store}>
      <ReduxRouter history={history} routerSelector={routerSelector}>
        {children}
      </ReduxRouter>
    </Provider>
  );
};
