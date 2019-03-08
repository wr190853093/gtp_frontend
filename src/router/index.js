import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import admin from '@/components/admin'

// 权限管理路由
import organization from '@/components/author/organization'
import user from '@/components/author/user'
// 项目管理路由
import project from '@/components/project/project'
import module from '@/components/project/module'
import api from '@/components/project/api'
import environment from '@/components/project/environment'

// 测试管理路由
import testcase from '@/components/ceshi/case'
import task from '@/components/ceshi/task'
import report from '@/components/ceshi/report'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: admin
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/admin',
      component: admin,
    },
    {
      path: '/author',
      component: admin,
      children: [
        {
          path: 'organization',
          name: 'organization',
          component: organization,
        },
        {
          path: 'user',
          name: 'user',
          component: user,
        },
      ]
    },
    {
      path: '/project',
      component: admin,
      children: [
        {
          path: 'project',
          name: 'project',
          component: project,
        },
        {
          path: 'module',
          name: 'module',
          component: module,
        },
        {
          path: 'api',
          name: 'api',
          component: api,
        },
        {
          path: 'environment',
          name: 'environment',
          component: environment,
        },
      ]
    },
    {
      path: '/ceshi',
      component: admin,
      children: [
        {
          path: 'case',
          name: 'case',
          component: testcase,
        },
        {
          path: 'task',
          name: 'task',
          component: task,
        },
        {
          path: 'report',
          name: 'report',
          component: report,
        },
      ]
    },
  ]
})
