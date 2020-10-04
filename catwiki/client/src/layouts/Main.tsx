import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Breed from './Breed';
import Home from './Home';

const Main: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/breeds/:id" component={Breed} exact />
    </Switch>
  );
};

export default Main;
