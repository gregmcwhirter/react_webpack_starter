import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const title = 'Barracuda';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app'),
);

module.hot.accept();
