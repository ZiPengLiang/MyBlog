<template>
  <div class="myBlog">
    <div class="main">
      <div class="con">
        <!-- 数据栏 -->
        <comment :data="comData" pagesize="12" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    comment: resolve => require(["./comment"], resolve),
    banner: resolve => require(["./banner"], resolve)
  },
  methods: {},
  data() {
    return {
      comData: {}
    };
  }
};
</script>
<style lang="scss"  scoped>
ul,
li {
  list-style: none;
}
p {
  text-align: left;
}

.myBlog {
  height: 100%;
  background: #fff;
  header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .main {
    // margin-top: 85px;
    padding-top: 85px;
  }
}
</style>

