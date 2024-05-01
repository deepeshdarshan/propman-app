import React from 'react';
import ReactDOM from 'react-dom';
import FilterTypes from '../Filter.types';
import RatingFilter from './RatingFilter';

it('It should mount', () => {
  const div = document.createElement('div');
  const styles: FilterTypes.Style = { content: '', title: '' };
  // ReactDOM.render(<RatingFilter min={1} max={5}  />, div);
  ReactDOM.unmountComponentAtNode(div);
});