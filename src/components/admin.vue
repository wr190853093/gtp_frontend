<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <div class="menu">
          <el-menu router :default-active="$route.path"
                   class="el-menu-vertical-demo"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b"
                   style="border-right: none">
            <el-submenu index="1">
              <template slot="title">
                <i class="iconfont icon-user"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <router-link id="organization" to="/author/organization">
                  <el-menu-item index="1-1">组织管理</el-menu-item>
                </router-link>
                <router-link id="user" to="/author/user">
                  <el-menu-item index="1-2">用户管理</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-printer"></i>
                <span>项目管理</span>
              </template>
              <el-menu-item-group>
                <router-link id="project" to="/project/project">
                  <el-menu-item index="2-1">项目管理</el-menu-item>
                </router-link>
                <router-link id="module" to="/project/module">
                  <el-menu-item index="2-2">模块管理</el-menu-item>
                </router-link>
                <router-link id="api" to="/project/api">
                  <el-menu-item index="2-3">接口管理</el-menu-item>
                </router-link>
                <router-link id="environment" to="/project/environment">
                  <el-menu-item index="2-4">环境管理</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-time"></i>
                <span>测试管理</span>
              </template>
              <el-menu-item-group>
                <router-link id="testcase" to="/ceshi/case">
                  <el-menu-item index="3-1">用例管理</el-menu-item>
                </router-link>
                <router-link id="task" to="/ceshi/task">
                  <el-menu-item index="3-2">任务管理</el-menu-item>
                </router-link>
                <router-link id="report" to="/ceshi/report">
                  <el-menu-item index="3-3">测试报告</el-menu-item>
                </router-link>
              </el-menu-item-group>

              <el-menu-item-group>

              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <div id="con">
          <router-view></router-view>
        </div>
      </el-main>
      <el-container>
      </el-container>
    </el-container>

  </div>
</template>


<script>
  import "../assets/icon/iconfont.css";
  import ElContainer from "../../node_modules/element-ui/packages/container/src/main.vue";
  import ElMenuItemGroup from "../../node_modules/element-ui/packages/menu/src/menu-item-group.vue";

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


  export default {
    components: {
      ElMenuItemGroup,
      ElContainer,
      organization,
      user,
      project,
      module,
      api,
      environment,
      testcase,
      task,
      report,
    },
    data() {
      return {
        isRouterAlive: true,
//        activeIndex:'/user/user_add'
      }

    },

  };
</script>

<style>
  .main {
    font-weight: bold;
  }

  .el-aside {
    background-color: #545c64;
    position: absolute;
    top: 60px;
    left: 0px;
    bottom: 0px;
  }

  .el-main {
    position: absolute;
    left: 200px;
    right: 0;
    top: 60px;
    bottom: 0;
    overflow: hidden
  }

  .menu {
    height: 100%;
  }

  #con {
    height: 100%;
    overflow: auto;
    /*或者
    *overflow-x:hidden;
    *overflow-y:scroll;
    */
  }

  a {
    color: #dcdcdc;
    text-decoration: none
  }

  a:hover {
    color: #eeeeee
  }

  body {
    margin: 0px;
    height: 100%;
  }
</style>
