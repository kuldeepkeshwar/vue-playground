import VueRouter from 'vue-router';
import Examples from './Examples';
import ExampleContainer from './ExampleContainer';
export const routes = [
  {
    path: '/',
    component: Examples
  },
  {
    path: '/:example',
    component: ExampleContainer
  }
];
const router = new VueRouter({
  routes // short for `routes: routes`
});
export default router;
