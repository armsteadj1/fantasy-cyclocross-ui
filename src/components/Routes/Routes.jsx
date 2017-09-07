import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App/App';
import { Prediction } from '../Prediction/Prediction';
import { StateRaces } from '../StateRaces/StateRaces';
import { States } from '../States/States';
import { Results } from '../Results/Results';
import { Terms } from '../Terms/Terms';

export const Routes = props => (
  <BrowserRouter {...props}>
    <App>
      <Switch>
        <Route exact path="/" component={States} />
        <Route exact path="/states" component={States} />
        <Route exact path="/states/:state/races/:year/:id/prediction" component={Prediction} />
        <Route exact path="/states/:state/races/:year/:id/results" component={Results} />
        <Route exact path="/states/:state/races" component={StateRaces} />
        <Route exact path="/terms" component={Terms} />

        <Redirect to="/" />
      </Switch>
    </App>
  </BrowserRouter>
);