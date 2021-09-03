import React from 'react';
import { routeMapping } from 'routes';
import { Route, Switch } from 'react-router-dom';


const staticRoutes = routeMapping.map((route) => {
  return (
    <Route
      key={route.path}
      exact={route.exact || true}
      path={route.path}
      component={route.component}
    />);
});

export const Main = () => {
  return (
    <Switch>
      {[...staticRoutes]}
    </Switch>
  );
};