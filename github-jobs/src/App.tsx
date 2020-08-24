import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Main from './layouts/Main';
import Footer from './components/Footer';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen py-3 px-2 md:py-4 md:px-3 lg:py-6 lg:px-20 mx-auto root-container">
        <Header />
        <main className="flex-1">
          <Main />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
