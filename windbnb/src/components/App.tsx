import React from 'react';
import './App.css';

import { FilterProvider } from '../context';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <FilterProvider>
        <Header />
        <Main />
      </FilterProvider>
    </div>
  );
}

export default App;
