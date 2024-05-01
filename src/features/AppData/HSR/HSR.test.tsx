import React from 'react';
import ReactDOM from 'react-dom';
import HSR from './HSR';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HSR />, div);
  ReactDOM.unmountComponentAtNode(div);
});