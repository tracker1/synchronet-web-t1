import { createRouterReducer } from '@lagunovsky/redux-react-router'
import { history } from './history';

import counterReducer from '../features/counter/counterSlice';

export const reducer = {
  route: createRouterReducer(history),
  counter: counterReducer,
}