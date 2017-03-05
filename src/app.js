import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Root from './Root.vue';
import Character from './components/Character.vue';
import Setting from './components/Setting.vue';
import Scene from './components/Scene.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Root },
  { path: '/home', component: Root },
  { path: '/character', component: Character },
  { path: '/setting', component: Setting },
  { path: '/scene', component: Scene }
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
