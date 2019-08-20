<template>
  <div>
    <section style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;">
      <!-- <div>
        <span class="leancloud-visitors" data-flag-title="Your Article Title">
          <em class="post-meta-item-text">阅读量：</em>
          <i class="leancloud-visitors-count"></i>
        </span>
      </div>-->
      <!-- <h3>
        <a href="javascript:;"></a>
        评 论：
      </h3>-->
      <div id="vcomments"></div>
    </section>
  </div>
</template>
<script>
export default {
  watch: {
    data: function(n) {
      console.log("data" + n);
    }
  },
  mounted: function() {
    // require window
    console.log(this.$route);
    let valinePath = this.$route.query.id
      ? window.location.pathname + this.$route.query.id
      : window.location.pathname;
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      //   document.getElementsByClassName("leancloud-visitors")[0].id =
      //     window.location.pathname;
      this.window = window;
      window.AV = require("leancloud-storage");
    }

    new Valine({
      el: "#vcomments",
      appId: "J2VgKE5qGV4ehUOdO4e4oyGK-gzGzoHsz", // your appId
      appKey: "e6p04zvWNl7aDyFvLMK6Ulxk", // your appKey
      notify: false,
      verify: true,
      //   path: window.location.pathname,
      path: valinePath,
      visitor: false,
      avatar: "mp",
      lang: "en",
      placeholder: "write here"
    });
  }
};
</script>
<style lang="scss" scoped>
</style>