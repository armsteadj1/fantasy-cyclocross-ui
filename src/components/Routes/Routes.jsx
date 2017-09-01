import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App/App';
import { Prediction } from '../Prediction/Prediction';
import { Route, Switch } from 'react-router';

export const Routes = props => (
  <BrowserRouter {...props}>
    <App>
      <Switch>
        <Route exact path="/" component={Prediction} />
        <Route exact path="/races/:year/:id/prediction" component={Prediction} />
      </Switch>
    </App>
  </BrowserRouter>
);