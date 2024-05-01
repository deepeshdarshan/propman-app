import React from 'react';
import ReactDOM from 'react-dom';
import RibbonIcon from './RibbonIcon';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RibbonIcon />, div);
  ReactDOM.unmountComponentAtNode(div);
});