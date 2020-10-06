import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Breed from './Breed';
import Home from './Home';
import MostSearchedBreed from './MostSearchedBreeds';
import NotFound from './NotFound';

const Main: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/breeds/popular" component={MostSearchedBreed} exact />
      <Route path="/breeds/:id" component={Breed} exact />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Main;
