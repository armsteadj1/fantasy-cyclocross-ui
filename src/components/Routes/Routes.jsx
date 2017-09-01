import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App/App';
import { Prediction } from '../Prediction/Prediction';
import { Route, Switch } from 'react-router';
import { StateRaces } from '../StateRaces/StateRaces';

export const Routes = props => (
  <BrowserRouter {...props}>
    <App>
      <Switch>
        <Route exact path="/" component={Prediction} />
        <Route exact path="/races/:year/:id/prediction" component={Prediction} />
        <Route exact path="/state/:state/races" component={StateRaces} />
      </Switch>
    </App>
  </BrowserRouter>
);