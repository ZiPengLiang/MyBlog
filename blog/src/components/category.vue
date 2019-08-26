<template>
  <div class="category">
    <div class="main">
      <div class="c_header">
        <h1>{{active.title}}</h1>
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
    padding: 15px 0;
  }
}
</style>