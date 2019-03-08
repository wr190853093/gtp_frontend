<template>
  <header>
    <el-header>
      <div style="width: 100%">
        <img src="../assets/header.png" >
        <el-dropdown style="float: right;margin-left: 10px">
          <i class="el-icon-setting "></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span style="float: right">管理员</span>
      </div>
    </el-header>

  </header>

</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .el-header {
    display: inherit;
    background-color: #101010;
    font-size: 18px;
    line-height: 60px;
    color: #999999;
  }
</style>
