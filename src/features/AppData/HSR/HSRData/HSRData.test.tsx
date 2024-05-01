import React from 'react';
import ReactDOM from 'react-dom';
import Hotel from './HSRData';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hotel />, div);
  ReactDOM.unmountComponentAtNode(div);
});