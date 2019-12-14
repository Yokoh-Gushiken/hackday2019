import textView from './pages/text';
import topView from './pages/top';
import imgView from './pages/img';
import textResultView from './pages/textResult';
import imgResultView from './pages/imgResult';

export default [
  { path: '/text', component: textView },
  { path: '/img', component: imgView },
  { path: '/text/result', component: textResultView },
  { path: '/img/result', component: imgResultView },
  { path: '/', component: topView }
];
