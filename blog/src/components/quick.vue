<template>
  <div>
    <quick-menu
      :menu-count="count"
      :icon-class="icons"
      :backgroundColor="backgroundColor"
      :position="position"
      :menu-url-list="list"
      @process="clickFn"
    ></quick-menu>
    <div class="more"></div>
  </div>
</template>
<script>
import quickMenu from "vue-quick-menu";
export default {
  components: {
    quickMenu
  },
  data() {
    return {
      count: 3,
      icons: [
        "el-icon-s-home",
        // "el-icon-share",
        "el-icon-link",
        "el-icon-user"
      ],
      backgroundColor:'rgba(0,0,0,0.3)',
      position: "bottom-left",
      list: [
        {
          isLink: true,
          url: "/home"
        },
        {
          isLink: true,
          url: "/links"
        },
        {
          isLink: true,
          url: "/aboutme"
        }
      ]
    };
  },
  methods: {
    clickFn(event) {
    //   console.log(666,event);

    }
  }
};
</script>
<style lang="" scoped>
</style>