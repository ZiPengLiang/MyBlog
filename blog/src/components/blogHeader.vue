<template>
  <div class="header">
    <div class="con PCBox">
      <div class="name">ZPengBlog</div>
      <!-- <router-link to="/home" class="name">ZPengBlog</router-link> -->
      <nav>
        <ul>
          <li v-for="item in navs" :key="item.name">
            <span v-if="item.index !=1" @click="goto(item.name)">{{item.title}}</span>
            <div v-else class="shareList">
              <span>{{item.title}}</span>
              <div class="more">
                <ul class="share">
                  <li
                    v-for="item in aboutShare"
                    @click="gotoCate(item)"
                    :key="item.name"
                  >{{item.title}}</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="con MobileBox">
      <div class="mobileTitle">ZPengBlog</div>
      <div class="mobileMenus"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["active"],

  methods: {
    goto(item) {
      this.$router.push({
        name: item
      });
    },
    gotoCate(item) {
      this.$router.push({
        name: "category",
        params: {
          id: item.index
        }
      });
    }
  },
  data() {
    return {
      navs: [
        {
          title: "首页",
          name: "Home",
          index: 0
        },
        {
          title: "分享",
          name: "Share",
          index: 1
        },

        {
          title: "友链",
          name: "Links",
          index: 2
        },
        {
          title: "关于",
          name: "aboutme",
          index: 3
        }
      ],
      aboutShare: [
        {
          title: "知识总结",
          index: 1
        },
        {
          title: "生活牢骚",
          index: 2
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
.header {
  width: 100%;
  background: #fff;
  // color: transparent;
  // position: fixed;
  // top: 0;
  // left: 0;
  z-index: 999;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.17);
  .con {
    width: 1280px;
    max-width: 100%;
    height: 80px;
    margin: 0 auto;
    line-height: 80px;
    .name {
      float: left;
      font-size: 20px;
      padding-left: 20px;
    }
    .name:hover {
      cursor: pointer;
      color: red;
    }
    nav {
      float: right;
      ul {
        height: 80px;
        li {
          width: 120px;
          height: 60px;
          padding: 10px 0 10px 0;
          line-height: 60px;
          text-align: center;
          float: left;
        }
        li span:hover {
          cursor: pointer;
          color: red;
        }
        .shareList {
          .more {
            display: none;
            width: 150px;
            height: 100px;
            background: #fff;
            transition: all 1s linear;
            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.17);
            transform: translateY(-100px);
            opacity: 0;
            .share {
              li {
                height: 50px;
                width: 100%;
                padding: 10px 20px;
                box-sizing: border-box;
                line-height: 30px;
                font-size: 14px;
                cursor: pointer;
                // text-align: left;
                transition: all 0.5s linear;
              }
              li:hover {
                transform: scale(1.2);
                color: red;
              }
            }
          }
        }
        .shareList:hover {
          .more {
            display: block;
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
    .login {
      margin-right: 20px;
      float: right;
      span {
        padding: 0 10px;
      }
      span:hover {
        cursor: pointer;
        color: red;
      }
    }
  }
  .MobileBox {
    position: relative;
    display: none;
    .mobileTitle {
      width: 100%;
      font-size: 20px;
      font-weight: 600;
    }
    .mobileMenus {
      position: absolute;
      width: 20px;
      // height: 20px;
      top: 0;
      left: 20px;
      
    }
  }
}
.active {
  color: red;
}
@media (max-width: 600px) {
  .PCBox {
    display: none;
  }
  .MobileBox {
    display: block !important;
  }
}
</style>

