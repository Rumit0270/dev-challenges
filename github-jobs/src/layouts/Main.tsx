import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import JobDetail from './JobDetail';

const Main: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/job/:id" component={JobDetail} exact />
    </Switch>
  );
};

export default Main;
