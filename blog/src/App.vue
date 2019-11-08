<template>
  <div id="app">
    <header class="appHeader">
      <blog-header />
    </header>
    <transition>
      <router-view></router-view>
    </transition>
    <foot class="blogFooter" />
    <el-backtop :bottom="100"></el-backtop>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    blogHeader: resolve => require(["@/components/blogHeader"], resolve),
    foot: resolve => require(["@/components/footer"], resolve)
  }
};
</script>

<style>
body,
html,
#app {
  padding: 0;
  margin: 0;
  /* height: 100%; */
  min-height: 100vh;
  width: 100%;
  text-align: center;
}
* {
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
*::-webkit-scrollbar {
  width: 0 !important;
}
div,
p,
span,
li,
ul,
a,
body,
label,
input,
button {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.con {
  width: 1080px;
  margin: 0 auto;
}
.headerTitle {
  text-align: left;
  font-size: 18px;
  color: #666;
}
.headerTitle a {
  font-size: 18px;
  color: #666;
}
.appHeader {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
#app {
  position: relative;
}
</style>
