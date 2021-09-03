import { Main } from 'containers';
import React from 'react';
import { pagePaths } from 'routes';
import { Route, Switch } from 'react-router-dom';

export const routes = (
  <Switch>
    <Route path={pagePaths.HOME} component={Main} />
  </Switch>
);
