import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入axios
import axios from 'axios'


import App from './App.vue'
// 引入子组件
import customers from './components/Customers'
import about from './components/About'
import add from './components/Add'
import customerdetail from './components/CustomerDetails'
import edit from './components/Edit'


Vue.use(VueRouter);

// 将axios挂载在vue原型上，Vue实例就有$http方法；$http可以是任意名字；
Vue.prototype.$http = axios;

// 配置路由
const router = new VueRouter({
  routes:[
    {path:'/',component:customers},
    {path:'/about',component:about},
    {path:'/add',component:add},
    {path:'/customer/:id',component:customerdetail},
    {path:'/edit/:id',component:edit},

  ],
  mode:'history',  //可以去掉url上面的#

});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
