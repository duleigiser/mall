import Vue from 'vue';
import Router from 'vue-router';
import GoodsList from '@/views/GoodsList';
import Cart from '@/views/Cart'

// import
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/goods',
      name: 'Goods',
      component: GoodsList
    },
    // {
    //   path: '/address',
    //   name: 'Address',
    //   component:Address
    // },
    // {
    //   path: '/orderConfirm',
    //   name: 'OrderConfirm',
    //   component:OrderConfirm
    // },
    // {
    //   path: '/orderSuccess',
    //   name: 'OrderSuccess',
    //   component:OrderSuccess
    // }
  ],
});
