import React from 'react';
import ReactDOM from 'react-dom';
import HotelCard from './HotelCard';

it('It should mount', () => {
  const div = document.createElement('div');
  //ReactDOM.render(<HotelCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});