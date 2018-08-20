import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        default: () => import('@/views/PostList'),
      },
    },
    {
      name: 'topic',
      path: '/topic/:id&user=:username',
      components: {
        main: () => import('@/views/Article'),
        user: () => import('@/views/User'),
      },
    },
    {
      name: 'user',
      path: '/user/:loginname',
      components: {
        user: () => import('@/views/User'),
      },
    },
    {
      name: 'login',
      path: '/login',
      components: {
        login: () => import('@/views/Login'),
      },
    },
    {
      name: 'message',
      path: '/message',
      components: {
        message: () => import('@/views/Message'),
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
});

export default router;
