import React from 'react';
import ReactDOM from 'react-dom';
import Legend from './Legend';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Legend />, div);
  ReactDOM.unmountComponentAtNode(div);
});