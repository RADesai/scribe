import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Root }
];

let router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  template: `
    <router-view class="view"></router-view>
  `
}).$mount('#app');
