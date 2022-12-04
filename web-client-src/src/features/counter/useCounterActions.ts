import { createActionsHook } from '../../hooks/react-redux-actions-hook';
import { increment, incrementAsync, incrementByAmount, incrementIfOdd, decrement } from './counterSlice';

export const useCounterActions = createActionsHook({
  increment, incrementAsync, incrementByAmount, incrementIfOdd, decrement
});
