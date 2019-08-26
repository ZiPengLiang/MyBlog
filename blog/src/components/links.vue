<template>
  <div class="links">
    <div class="main">
      <div class="c_header">
        <h1>友情链接</h1>
      </div>
      <div class="con">
        <div class="fLink">
          <h4>友情链接</h4>
          <div class="lCard" v-for="(item,index) in fLink" :key="index">
            <div class="b_iomg">
              <img :src="item.imgurl" alt />
            </div>
            <a :href="item.url" target="view_window">{{item.blogname}}</a>
            —— {{item.evaluate}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getLinks() {
      let that = this;
      this.loading = true;
      this.gl_ajax({
        method: "get",
        url: "/getData",
        data: {
          pageno: 1,
          pagesize: 10,
          library: "friendlink",
          data: {}
        },
        success(res) {
          that.loading = false;
          if (res.data.status == 0) {
            console.log(res);
            that.fLink = res.data.data;
          }
        },
        error(err) {
          this.loading = false;
          console.log(err);
        }
      });
    }
  },
  mounted() {
    this.getLinks();
  },
  data() {
    return {
      fLink: []
    };
  }
};
</script>
<style lang="scss"  scoped>
.links {
  height: 100%;
}
a {
  color: #000;
  margin-right: 5px;
}
.main {
  padding-top: 85px;
  .c_header {
    padding: 15px 0;
  }
  .con {
    width: 800px;
  }
  .fLink {
    width: 100%;
    text-align: left;
    .lCard {
      display: flex;
      //   justify-content: center;
      align-items: center;
      .b_iomg {
        width: 23px;
        height: 23px;
        margin-right: 15px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>