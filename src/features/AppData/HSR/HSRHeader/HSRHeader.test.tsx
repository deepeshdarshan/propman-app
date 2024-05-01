import React from 'react';
import ReactDOM from 'react-dom';
import HSRHeader from './HSRHeader';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HSRHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});