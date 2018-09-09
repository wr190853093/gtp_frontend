<template>
  <div class="main">
    <el-container>
      <el-header>
        <!--<span style="width:200px;">慧测BOSS系统</span>-->
        <a href="/login" style="width:200px;">慧测BOSS系统</a>

        <div style="width: 100%">
          <span style="float: right">管理员</span>
          <el-dropdown style="float: right;margin-right: 15px">
            <i class="el-icon-setting"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
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
                  <span>学员管理</span>
                </template>
                <el-menu-item-group>
                  <!--&lt;!&ndash;<router-link id="user_add" to="/user/user_add">&ndash;&gt;-->
                  <!--<el-menu-item index="/user/user_add">学员报名</el-menu-item>-->
                  <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
                  <!--&lt;!&ndash;<router-link id="user_info" to="/user/user_info">&ndash;&gt;-->
                  <!--<el-menu-item index="/user/user_info">基本信息</el-menu-item>-->
                  <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
                  <!--&lt;!&ndash;<router-link id="class_management" to="/user/class_management">&ndash;&gt;-->
                  <!--<el-menu-item index="/user/class_management">班级管理</el-menu-item>-->
                  <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
                  <!--&lt;!&ndash;<router-link id="stage_evaluation" to="/user/stage_evaluation">&ndash;&gt;-->
                  <!--<el-menu-item index="/user/stage_evaluation">阶段测评</el-menu-item>-->
                  <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
                  <!--&lt;!&ndash;<router-link id="evaluation_recode" to="/user/evaluation_recode">&ndash;&gt;-->
                  <!--<el-menu-item index="/user/evaluation_recode">测评记录</el-menu-item>-->
                  <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">
                  <i class="iconfont icon-accountbook"></i>
                  <span>财务管理</span>
                </template>
                <el-menu-item-group>
                  <!--<router-link id="general_ledger" to="/finance/general_ledger">-->
                    <!--<el-menu-item index="2-1">总账目</el-menu-item>-->
                  <!--</router-link>-->
                  <!--<router-link id="financial_flow" to="/finance/financial_flow">-->
                    <!--<el-menu-item index="2-2">收支流水</el-menu-item>-->
                  <!--</router-link>-->
                  <!--<router-link id="student_pay" to="/finance/student_pay">-->
                    <!--<el-menu-item index="2-3">学员缴费</el-menu-item>-->
                  <!--</router-link>-->
                  <!--<router-link id="basic_data" to="/finance/basic_data">-->
                    <!--<el-menu-item index="2-4">数据配置</el-menu-item>-->
                  <!--</router-link>-->
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
      </el-container>
      <el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style>
  .main {
    font-weight: bold;
  }

  .el-header {
    display: inherit;
    background-color: #101010;
    font-size: 18px;
    line-height: 60px;
    color: #999999;
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
    top: 60px;
    right: 0;
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
  }

  a:hover {
    color: #eeeeee
  }

  a {
    text-decoration: none
  }

  body {
    margin: 0px;
    height: 100%;
  }
</style>

<script>
  import "../assets/icon/iconfont.css";
  import ElContainer from "../../node_modules/element-ui/packages/container/src/main.vue";
  import ElMenuItemGroup from "../../node_modules/element-ui/packages/menu/src/menu-item-group.vue";
  // import UserAdd from "./student/user_add.vue"
  // import UserInfo from "./student/user_info.vue"
  // import StageEvaluation from "./student/stage_evaluation.vue"
  // import EvaluationRecode from "./student/evaluation_recode.vue"
  // import ClassManagement from "./student/class_management.vue"
  // import GeneralLedger from '@/components/finance/general_ledger'
  // import FinancialFlow from '@/components/finance/financial_flow'
  // import StudentPay from '@/components/finance/student_pay'
  // import BasicData from '@/components/finance/basic_data'

  export default {
    components: {
      ElMenuItemGroup,
      ElContainer,
      // UserAdd,
      // UserInfo,
      // StageEvaluation,
      // EvaluationRecode,
      // ClassManagement,
      // GeneralLedger,
      // FinancialFlow,
      // StudentPay,
      // BasicData,
    },
    data() {
      return {
        isRouterAlive: true,
//        activeIndex:'/user/user_add'
      }
//      const item = {
//        date: '2016-05-02',
//        name: '王小虎',
//        address: '上海市普陀区金沙江路 1518 弄'
//      };
//      return {
//        tableData: Array(10).fill(item)
//      }
    },

  };
</script>
