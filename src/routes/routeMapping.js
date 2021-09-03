import { pagePaths } from 'routes';
import { Home, ToolBar } from 'components';

export const routeMapping = [
  {
    path: pagePaths.HOME,
    exact: true,
    component: Home
  },
  {
    path: pagePaths.TOOLBAR,
    exact: true,
    component: ToolBar
  }
];
