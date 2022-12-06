import * as React from 'react';
import { act } from 'react-dom/test-utils';
import * as ReactDOM from 'react-dom';
import { Context } from '../../state/Context';
import { App } from './App';

describe('App', function () {
  it('should display a header', function () {
    let container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(
        <Context>
          <App title="Test">
            <h1>Test</h1>
            <p>Test Content</p>
          </App>
        </Context>,
        container,
      );
    });
    const header = container.querySelector('h1');
    expect(header?.textContent).toBe('Hello React!');
  });
});
