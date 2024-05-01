import React from 'react';
import ReactDOM from 'react-dom';
import StarIcon from './StarIcon';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarIcon />, div);
  ReactDOM.unmountComponentAtNode(div);
});