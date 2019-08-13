<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
    <el-backtop :bottom="100"></el-backtop>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body,
html,
#app {
  padding: 0;
  margin: 0;
  height: 100%;
  text-align: center;
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
  width: 1200px;
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
</style>
