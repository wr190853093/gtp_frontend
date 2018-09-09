import Vue from 'vue'
import Router from 'vue-router'
// import user_add from '@/components/student/user_add'
import login from '@/components/login'
import admin from '@/components/admin'

// 财务管理路由
// import general_ledger from '@/components/finance/general_ledger'
// import financial_flow from '@/components/finance/financial_flow'
// import student_pay from '@/components/finance/student_pay'
// import basic_data from '@/components/finance/basic_data'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/admin', component:admin,
      // children : [
      //   {
      //     path:'user_add',
      //     name:'user_add',
      //     component:user_add,
      //   },
      // ]
    },
    // {
    //   path: '/finance', component:admin,
    //   children : [
    //     {
    //       path:'general_ledger',
    //       name:'general_ledger',
    //       component:general_ledger,
    //     },
    //     {
    //       path:'financial_flow',
    //       name:'financial_flow',
    //       component:financial_flow,
    //     },
    //     {
    //       path:'student_pay',
    //       name:'student_pay',
    //       component:student_pay,
    //     },
    //     {
    //       path:'basic_data',
    //       name:'basic_data',
    //       component:basic_data,
    //     },
    //   ]
    // },
  ]
})
