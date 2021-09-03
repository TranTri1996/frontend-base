import React from 'react';
import { routeMapping } from 'routes';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from 'components';

const staticRoutes = routeMapping.map((route) => {
  return (
    <Route
      key={route.path}
      exact={route?.exact}
      path={route.path}
      component={route.component}
    />);
});

export const Main = () => {
  return (
    <Switch>
      {[...staticRoutes]}
      <Route
        key="page-not-found"
        path="*"
        component={NotFound}
      />
    </Switch>
  );
};