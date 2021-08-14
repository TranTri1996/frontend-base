import { pagePaths } from 'routes';
import { Home, ToolBar } from 'components';

export const routeMapping = [
  {
    path: pagePaths.HOME,
    component: Home
  },
  {
    path: pagePaths.TOOLBAR,
    component: ToolBar
  }
];
