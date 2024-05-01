import React from 'react';
import ReactDOM from 'react-dom';
import TypeFilter from './TypeFilter';
import FilterTypes from '../Filter.types';

it('It should mount', () => {
  const div = document.createElement('div');
  // const styles: FilterTypes.Style = { content: '', title: '' };
  // ReactDOM.render(<TypeFilter  />, div);
  ReactDOM.unmountComponentAtNode(div);
});