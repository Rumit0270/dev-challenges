import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './layouts/Main';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen px-3 md:px-8 lg:px-10 mx-auto app-container">
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
