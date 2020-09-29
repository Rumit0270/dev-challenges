import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

const Main: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  );
};

export default Main;
