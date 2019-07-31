<template>
  <div class="Introduction">
    <!-- 头部 -->
    <header>
      <blog-header />
    </header>
    <div class="main">
      

    </div>
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
</style>
