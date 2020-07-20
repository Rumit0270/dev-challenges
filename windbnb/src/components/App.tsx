import React from 'react';
import './App.css';

import { FilterProvider } from '../context';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <FilterProvider>
        <Header />
        <Main />
        <Footer />
      </FilterProvider>
    </div>
  );
}

export default App;
