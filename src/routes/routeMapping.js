import { pagePaths } from 'routes';
import { Home } from 'components';
import { UserList } from 'containers/UserList';

export const routeMapping = [
  {
    path: pagePaths.HOME,
    exact: true,
    component: Home
  },
  {
    path: pagePaths.USERS,
    exact: true,
    component: UserList
  }
];
