import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { pagePaths } from 'routes';
import { Main } from 'containers';

export const routes = (
  <Switch>
    <Route path={pagePaths.HOME} component={Main} />
  </Switch>
);
