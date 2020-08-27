import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import JobDetail from './JobDetail';
import { JobsProvider } from '../context/JobsContext';
import { JobCriteriaProvider } from '../context/JobCriteriaContext';

const Main: React.FC = (): JSX.Element => {
  return (
    <JobsProvider>
      <JobCriteriaProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/jobs/:id" component={JobDetail} exact />
        </Switch>
      </JobCriteriaProvider>
    </JobsProvider>
  );
};

export default Main;
