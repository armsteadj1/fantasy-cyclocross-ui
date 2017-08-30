import React from 'react';
import ReactDOM from 'react-dom';
import App from './Prediction';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Prediction />, div);
});
