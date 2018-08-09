// import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

import Login from '@/views/Login';

export default new Router({
  routes: [
    { name: 'Login',path: '/login',component: Login }
  ]
});
