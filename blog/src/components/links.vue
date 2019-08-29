<template>
  <div class="links">
    <div>
      <div class="main">
        <header>
          <div class="c_header">
            <h1 class="fLinkHeader">友情链接</h1>
          </div>
        </header>
        <div class="con">
          <div v-loading="loading">
            <div class="card">
              <h4>友情链接</h4>
              <div class="fLink">
                <div class="lCard" v-for="(item,index) in fLink" :key="index">
                  <div class="b_iomg">
                    <img
                      :src="item.imgurl?item.imgurl:'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=ee323c6c71cf3bc7e855c5eae1309699/3801213fb80e7becdddcc3802e2eb9389b506b49.jpg'"
                      alt
                    />
                    <div class="blog_title">{{item.evaluate}}</div>
                  </div>
                  <div class="link">
                    <a :href="item.url" target="view_window">{{item.blogname}}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card" style="margin-top:50px">
              <h4>我的项目</h4>
              <div class="fLink">
                <div class="lCard" v-for="(item,index) in mLink" :key="index">
                  <div class="b_iomg">
                    <img
                      :src="item.imgurl?item.imgurl:'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=ee323c6c71cf3bc7e855c5eae1309699/3801213fb80e7becdddcc3802e2eb9389b506b49.jpg'"
                      alt
                    />
                    <div class="blog_title">{{item.evaluate}}</div>
                  </div>

                  <div class="link">
                    <a :href="item.url" target="view_window">{{item.blogname}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <valine />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    valine: resolve => require(["./valine"], resolve)
  },
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
            let data = res.data.data;
            // console.log(data);
            that.fLink = [];
            that.mLink = [];
            data.forEach(item => {
              if (item.linkType == "fLinks") {
                that.fLink.push(item);
              } else {
                that.mLink.push(item);
              }
            });
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
      fLink: [],
      mLink: [],
      loading: false
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
header {
  width: 100%;
  height: 260px;
}
.con {
  // width: 800px;
}
.main {
  padding-top: 85px;
  margin-bottom: 100px;
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
  .card {
    // text-align: left;
    width: 100%;
  }
  .fLink {
    width: 100%;
    min-height: 300px;
    text-align: left;
    display: flex;
    justify-content: space-around;
    // align-content: center;
    flex-wrap: wrap;
    .lCard {
      width: 250px;
      height: 360px;
      // display: flex;
      box-shadow: 0 0 5px #e0e0e0;
      margin: 20px;
      .b_iomg {
        width: 250px;
        height: 250px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .blog_title {
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 100;
          width: 100%;
          height: 0;
          overflow: hidden;
          background-color: rgba(0, 0, 0, 0.6);
          transition: all 0.3s ease;
        }
      }
      .b_iomg:hover {
        .blog_title {
          height: 100%;
        }
      }
      .link {
        display: block;
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a {
        font-size: 20px;
        font-weight: 500;
        color: #666;
      }
      a:hover {
        color: #eb5055;
      }
    }
  }
}
</style>