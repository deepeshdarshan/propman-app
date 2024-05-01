import React from 'react';
import ReactDOM from 'react-dom';
import HSRInfo from './HSRInfo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HSRInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});