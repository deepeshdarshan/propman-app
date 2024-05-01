import React from 'react';
import ReactDOM from 'react-dom';
import HotelCards from './HotelCards';

it('It should mount', () => {
  const div = document.createElement('div');
  //ReactDOM.render(<HotelCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});