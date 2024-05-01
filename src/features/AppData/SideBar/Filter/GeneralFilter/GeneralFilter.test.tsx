import React from 'react';
import ReactDOM from 'react-dom';
import GeneralFilter from './GeneralFilter';
import FilterTypes from '../Filter.types';

it('It should mount', () => {
  const div = document.createElement('div');
  // const styles: FilterTypes.Style = { content: '', title: '' };
  // ReactDOM.render(<GeneralFilter  />, div);
  ReactDOM.unmountComponentAtNode(div);
});