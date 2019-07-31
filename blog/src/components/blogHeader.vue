<template>
  <div class="header">
    <div class="con">
      <div class="b-img"></div>
      <nav>
        <ul>
          <li v-for="item in navs" :key="item.name">
            <span @click="goto(item.name)">{{item.title}}</span>
          </li>
        </ul>
      </nav>
      <!-- <div class="login">
        <span @click="gotoLogin">登陆</span>/
        <span @click="gotoReg">注册</span>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotoLogin() {
      this.$router.push({
        name: "login"
      });
    },
    goto(item) {
      this.$router.push({
        name: item
      });
    }
  },
  data() {
    return {
      navs: [
        {
          title: "首页",
          name: "Home"
        },
        {
          title: "技术总结",
          name: "Summary"
        },
        {
          title: "个人项目",
          name: "Projects"
        },
        {
          title: "个人介绍",
          name: "Introduction"
        },
        {
          title: "留言板",
          name: "Message"
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
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.17);
  .con {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    line-height: 80px;
    .b-img {
      width: 100px;
      height: 60px;
      padding: 10px;
      float: left;
    }
    nav {
      float: left;
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
        li:hover {
          cursor: pointer;
          color: red;
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
}
</style>

