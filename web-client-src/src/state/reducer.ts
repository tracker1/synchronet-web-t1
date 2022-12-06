import { createRouterReducer } from '@lagunovsky/redux-react-router'
import { history } from './history';

import counterReducer from '../feature/counter/counterSlice';
import themeReducer from '../theme/themeSlice';

export const reducer = {
  route: createRouterReducer(history),
  counter: counterReducer,
  theme: themeReducer,
}