import React from 'react';
import styles from './App.module.css';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className={styles['container']}>
      <div className={styles['main-container']}>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
