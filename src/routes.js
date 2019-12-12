import gucciView from './pages/gucci';
import topView from './pages/top';
import yokoView from './pages/yoko';

export default [
  { path: '/gucci', component: gucciView },
  { path: '/yoko', component: yokoView },
  { path: '/', component: topView }
];
