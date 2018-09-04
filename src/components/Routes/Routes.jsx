import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App/App';
import {Racers} from "../Racers/Racers";
import {Teams} from "../Teams/Teams";
import {PointsResults} from "../PointsResults/PointsResults";
import {TeamDetails} from "../TeamDetails/TeamDetails";

export const Routes = props => (
  <BrowserRouter {...props}>
    <App>
      <Switch>
        <Route exact path="/" component={PointsResults} />
        <Route exact path="/racers" component={Racers} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/results/points" component={PointsResults} />
        <Route exact path="/teams/:id" component={TeamDetails} />
        <Redirect to="/" />
      </Switch>
    </App>
  </BrowserRouter>
);