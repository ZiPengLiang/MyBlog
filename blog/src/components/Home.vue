<template>
  <div class="myBlog">
    <div class="main">
      <div class="con">
        <!-- 数据栏 -->
        <comment :data="comData" pageSize="12" />
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
      comData: [
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          id: 1,
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          id: 2,
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          id: 3,
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          id: 4,
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          id: 5,
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          id: 6,
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          id: 7,
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          id: 8,
          type: "技术推荐"
        },
        {
          title: "vue+echarts 动态绘制图表以及异步加载数据",
          time: "2019-6-27",
          vistor: "888",
          id: 9,
          type: "技术推荐"
        }
      ]
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
  background: #fff;
  header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .main {
    margin-top: 85px;
  }
}
</style>

