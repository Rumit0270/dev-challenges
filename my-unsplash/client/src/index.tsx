import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { ImageProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <ImageProvider>
      <App />
    </ImageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
