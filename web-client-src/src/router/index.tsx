import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { push, replace, go, back, forward } from '@lagunovsky/redux-react-router'
import { Counter } from '../features/counter/Counter';
import { createActionsHook } from '../hooks/react-redux-actions-hook';

export const Router = () => {
  return (
    <Routes>
      <Route path={'*'} element={<Counter />} />
    </Routes>
  );
}

export const useNavigationActions = createActionsHook({
  push, replace, go, back, forward,
});