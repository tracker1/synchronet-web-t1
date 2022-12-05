import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Context } from './state/Context';
import { Router } from './router';
import reportWebVitals from './reportWebVitals';

import './index.css';
import "@fontsource/inconsolata";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Context>
      <Router />
    </Context>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
