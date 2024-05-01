import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});