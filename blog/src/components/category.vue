<template>
  <div class="category">
    <div class="main">
      <div class="c_header">
        <h1>{{active.title}}</h1>
      </div>
      <div class="con" >
        <comment :data="comData" pageSize="9" />
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
      comData: [
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          type: "技术推荐"
        }
      ],
      aboutShare: [
        {
          title: "知识总结",
          name: "Knowledge",
          index: 1
        },
        {
          title: "生活牢骚",
          name: "life",
          index: 2
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.main {
  margin-top: 85px;
  .c_header {
    padding: 15px 0;
  }
}
</style>