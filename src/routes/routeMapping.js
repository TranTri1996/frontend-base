import pagePaths from './pagePaths';
import Home from '../components/Home';
import InfinityScrollExample from '../components/InfinityScrollExample/InfinityScrollExample';
import PaginateTable from '../components/PaginationTableExample/PaginateTable';

const routeMapping = [
    {
      path: pagePaths.HOME,
      component: Home
    },
    {
      path: pagePaths.INFINITY_SCROLL_EXAMPLE,
      component: InfinityScrollExample
    },
    {
      path: pagePaths.PAGINATE_LONG_LIST_EXAMPLE,
      component: PaginateTable
    }
];

export default routeMapping;
