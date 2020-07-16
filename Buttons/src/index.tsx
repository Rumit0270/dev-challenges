import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
