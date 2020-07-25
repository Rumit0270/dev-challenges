import React from 'react';
import Todos from './Todos/Todos';
import Footer from './Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <Todos />
        <Footer />
      </div>
    </>
  );
}

export default App;
