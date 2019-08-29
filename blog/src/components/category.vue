<template>
  <div class="category">
    <div class="main">
      <div class="c_header">
        <h1 class="fLinkHeader">{{active.title}}</h1>
      </div>
      <div class="con">
        <comment :data="comData" pagesize="9" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    comment: resolve => require(["./comment"], resolve)
  },
  mounted() {},
  methods: {
    getId(id) {
      let activeId = id ? id : this.$route.params.id;
      this.active = this.aboutShare.filter(item => {
        if (item.index == activeId) {
          return item;
        }
      })[0];
      this.comData.classification = this.active.name;
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getId(to.params.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.getId(to.params.id);
    next();
  },
  data() {
    return {
      // 当前分类
      active: {},
      //列表信息
      comData: {
        classification: ""
      },
      aboutShare: [
        {
          title: "知识总结",
          name: "summary",
          index: 1
        },
        {
          title: "生活牢骚",
          name: "whining",
          index: 2
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.category {
  height: 100%;
}
.main {
  padding-top: 85px;
  .c_header {
    background: url(http://infolee.001666.cn/zb_users/theme/infolee/include/cateimg/2.jpg)
      no-repeat;
    background-size: cover;
    background-position: center center;
    color: #fff;
    height: 260px;
    position: relative;
    .fLinkHeader {
      position: absolute;
      top: 50%;
      width: 100%;

      // left: 50%;
      transform: translateY(-50%);
      margin: 0;
      z-index: 99;
    }
  }
  .c_header::after {
    background: #171717;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: " ";
    overflow: hidden;
    display: block;
  }
}
</style>