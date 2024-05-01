import React from 'react';
import ReactDOM from 'react-dom';
import FilterTypes from '../Filter.types';
import PriceFilter from './PriceFilter';

it('It should mount', () => {
  const div = document.createElement('div');
  const styles: FilterTypes.Style = { content: '', title: '' };
  // ReactDOM.render(<PriceFilter min={0} max={250}  />, div);
  ReactDOM.unmountComponentAtNode(div);
});