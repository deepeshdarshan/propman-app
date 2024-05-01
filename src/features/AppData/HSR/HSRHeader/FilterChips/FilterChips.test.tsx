import React from 'react';
import ReactDOM from 'react-dom';
import FilterChips from './FilterChips';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterChips />, div);
  ReactDOM.unmountComponentAtNode(div);
});