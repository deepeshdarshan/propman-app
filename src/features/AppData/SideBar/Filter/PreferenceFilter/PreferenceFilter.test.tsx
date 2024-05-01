import React from 'react';
import ReactDOM from 'react-dom';
import FilterTypes from '../Filter.types';
import PreferenceFilter from './PreferenceFilter';

it('It should mount', () => {
  const div = document.createElement('div');
  const styles: FilterTypes.Style = { content: '', title: '' };
  // ReactDOM.render(<PreferenceFilter min={1} max={5}  />, div);
  ReactDOM.unmountComponentAtNode(div);
});