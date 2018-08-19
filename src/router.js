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
        main: () => import('@/components/PostList'),
      },
    },
    {
      name: 'topic',
      path: '/topic/:id&user=:username',
      components: {
        main: () => import('@/components/Article'),
        user: () => import('@/components/User'),
      },
    },
    {
      name: 'user',
      path: '/user/:loginname',
      components: {
        main: () => import('@/components/User'),
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
