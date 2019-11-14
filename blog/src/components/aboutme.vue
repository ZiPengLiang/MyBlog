<template>
  <div class="Introduction">
    <div class="main">
      <div class="c_header">
        <h1 class="fLinkHeader">关于我</h1>
      </div>
      <div class="contenter">
        <div class="about">
          <div class="title">about Me</div>
          <p>我叫梁梓棚</p>
          <p>是一个2019届的毕业生</p>
        </div>
        <div class="about">
          <div class="title">about My Work</div>
          <p>2019/06 - 至今：广州康行信息有限公司</p>
          <p class="evaluate">从大学毕业就到该公司工作了，至今为止还十分满意</p>
        </div>
        <div class="about">
          <div class="title">about Thie Blog</div>
          <p>这是我第一个博客，说实话我都不知道该写什么，在搭建的过程中也遇到了种种问题，也发现了自己许多的不足之处</p>
          <p>该博客主要是用于记录我所遇到的问题，同时也会将自己在学习前端的知识点一一总结上去</p>
          <p>这博客我用的是vue开发的，除了使用个别UI框架外其他都是我自己写的，后台方面打算采用Node来搭建后台，数据库用MongeDB，之所以采用MongeDB是因为我MySQl忘得差不多，只能将就了</p>
          <p>第一次写博客，一切流露着平穷的味道</p>
        </div>
      </div>
    </div>
    <div class="contenter">
      <!-- <valine /> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    blogHeader: resolve => require(["./blogHeader"], resolve),
    valine: resolve => require(["./valine"], resolve)
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.Introduction {
  padding-bottom: 100px;
  box-sizing: border-box;
  // padding: 0 20px 100px;
}
.contenter {
  margin: 0 auto;
  max-width: 700px;
  text-align: left;
  box-sizing: border-box;
  padding: 0 20px;
}
.main {
  padding-top: 85px;

  p {
    margin-bottom: 16px;
    font-size: 14px;
  }
  .about {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 40px;
    .title {
      font-size: 20px;
      height: 30px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 16px;
    }
    .evaluate {
      padding-left: 2em;
    }
  }
}
.c_header {
  // padding: 15px 0;
  // background: rgba(12, 12, 12, 0.9);
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
</style>
