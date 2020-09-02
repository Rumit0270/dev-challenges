import React from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ImageProvider } from './context';

function App() {
  return (
    <div className="app-container">
      <ImageProvider>
        <Header />
        <Main />
        <Footer />
      </ImageProvider>
    </div>
  );
}

export default App;
