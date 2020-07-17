import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Main.scss';
import Buttons from '../Buttons/Buttons';
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home';
import Inputs from '../Inputs/Inputs';

const Main: React.FC = (): JSX.Element => {
  return (
    <div className="main-container">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/buttons" component={Buttons} exact />
        <Route path="/inputs" component={Inputs} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default Main;
