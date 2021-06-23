import pagePaths from './pagePaths';
import Home from '../components/Home';
import InfinityScrollExample from '../components/InfinityScrollExample/InfinityScrollExample';

const routeMapping = [
    {
      path: pagePaths.HOME,
      component: Home
    },
    {
      path: pagePaths.INFINITY_SCROLL_EXAMPLE,
      component: InfinityScrollExample
    }
];

export default routeMapping;
