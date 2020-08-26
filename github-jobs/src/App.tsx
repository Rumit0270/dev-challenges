import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Main from './layouts/Main';
import Footer from './components/Footer';
import useJobsDataFetch from './hooks/useJobsDataFetch';

const App: React.FC = (): JSX.Element => {
  useJobsDataFetch();

  return (
    <Router>
      <div className="flex flex-col min-h-screen py-3 px-3 md:py-4 md:px-12 lg:py-6 lg:px-20 mx-auto root-container">
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
