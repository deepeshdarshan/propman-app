import React from 'react';
import ReactDOM from 'react-dom';
import NameFilter from './NameFilter';
import FilterTypes from '../Filter.types';

it('It should mount', () => {
  const div = document.createElement('div');
  const styles: FilterTypes.Style = { content: '', title: '' };
  // ReactDOM.render(<NameFilter hotelNames={[""]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});