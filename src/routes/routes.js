import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pagePaths from './pagePaths';
import Main from '../containers/Main/Main';

const Routes = (
  <Switch>
    <Route path={pagePaths.HOME} component={Main} />
  </Switch>
);

export default Routes;
