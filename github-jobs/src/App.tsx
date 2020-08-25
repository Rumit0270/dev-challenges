import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { useLocalStore } from 'mobx-react';

import Header from './components/Header';
import Main from './layouts/Main';
import Footer from './components/Footer';
import { getJobs } from './api/jobsApiService';
import jobsInitializer from './store/JobsStore';

const App: React.FC = (): JSX.Element => {
  const jobsState = useLocalStore(jobsInitializer);

  useEffect(() => {
    (async () => {
      try {
        jobsState.loading = true;
        let res = await getJobs();
        let jobs = res.data;
        jobsState.jobs = jobs;
        jobsState.loading = false;
      } catch (err) {
        jobsState.loading = false;
        jobsState.jobs = [];
      }
    })();
  }, [jobsState]);

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
