import React from 'react';
import ReactDOM from 'react-dom';
import AppData from './AppData';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppData />, div);
  ReactDOM.unmountComponentAtNode(div);
});