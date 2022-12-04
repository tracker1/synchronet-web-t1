import { createRouterMiddleware } from '@lagunovsky/redux-react-router'
import { history } from './history';

export const routerMiddleware = createRouterMiddleware(history);

