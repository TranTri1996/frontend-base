import { pagePaths } from 'routes';
import { Home, ToolBar } from 'components';
import { UserList } from 'containers/UserList/UserList';

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
  },
  {
    path: pagePaths.USERS,
    exact: true,
    component: UserList
  }
];
