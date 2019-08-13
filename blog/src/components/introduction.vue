<template>
  <div class="Introduction">
    <!-- 头部 -->
    <header>
      <blog-header active="4" />
    </header>
    <div class="main">
      <div class="con">
        <div class="headerTitle">
          <i class="el-icon-location-outline"></i>
          <router-link to="/home">首页</router-link>&gt; 个人介绍
        </div>
        <div class="introMain">
          
        </div>
      </div>
    </div>
    <el-backtop :bottom="100"></el-backtop>
  </div>
</template>
<script>
export default {
  components: {
    blogHeader: resolve => require(["./blogHeader"], resolve)
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.main{
  padding-top:40px;
   
}
</style>
