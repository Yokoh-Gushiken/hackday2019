import Vue from 'vue';
import VueRouter from 'vue-router';
import app from '../pages/app';
import routes from '../routes';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: routes
});


new Vue({
  router,
  render: h => h(app)
}).$mount("app");