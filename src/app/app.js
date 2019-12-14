import app from '../pages/app';
import routes from '../routes';
import stores from '../store'
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: "history",
  routes: routes
});

const store = new Vuex.Store(stores);

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount("app");