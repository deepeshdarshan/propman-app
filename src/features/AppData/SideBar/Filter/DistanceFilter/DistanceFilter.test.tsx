import React from 'react';
import ReactDOM from 'react-dom';
import DistanceFilter from './DistanceFilter';
import FilterTypes from '../Filter.types';

it('It should mount', () => {
  const div = document.createElement('div');
  const styles: FilterTypes.Style = { content: '', title: '' };
  // ReactDOM.render(<DistanceFilter min={3} max={5} />, div);
  ReactDOM.unmountComponentAtNode(div);
});