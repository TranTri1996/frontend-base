import React from 'react';
import { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import routeMapping from '../../routes/routeMapping';

const staticRoutes = routeMapping.map((route) => {
  return (
    <Route
      key={route.path}
      exact={route.exact || true}
      path={route.path}
      component={route.component}
    />);
});

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.routes = [...staticRoutes];
  }

  render() {
    return (
      <Switch>
        {this.routes}
      </Switch>
    );
  }
}

export default Main;
