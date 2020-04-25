export default [
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/dev/web/sites/rickb-recipes/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/dev/web/sites/rickb-recipes/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/dev/web/sites/rickb-recipes/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/dev/web/sites/rickb-recipes/node_modules/gridsome/app/pages/404.vue")
  }
]

