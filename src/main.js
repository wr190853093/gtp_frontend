// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {get,post,put,patch,del} from "./util/http";
import {delCookie,getCookie} from "./util/util";

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$del = del;
Vue.prototype.$put = put;
Vue.prototype.$patch = patch;

Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
