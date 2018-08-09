import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App/App';
import {Racers} from "../Racers/Racers";

export const Routes = props => (
  <BrowserRouter {...props}>
    <App>
      <Switch>
        <Route exact path="/" component={Racers} />
        <Route exact path="/racers" component={Racers} />
        <Redirect to="/" />
      </Switch>
    </App>
  </BrowserRouter>
);