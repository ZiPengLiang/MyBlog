<template>
  <div class="article" v-loading="loading">
    <div class="main">
      <div class="con">
        <div class="articleContenter a_main">
          <div class="a_header">
            <p class="title">{{card.title}}</p>
            <p class="about">
              <span>
                <i class="el-icon-time"></i>
                {{getTime(card.date)}}
              </span>
              <span>
                <i class="el-icon-view"></i>
                {{card.watch}}
              </span>
              <span>
                <i class="el-icon-aim"></i>
                {{card.classification == 'summary'?'知识总结':'生活牢骚'}}
              </span>
            </p>
            <div class="type">
              <span class="t_button" v-for="(item,index) in card.blogType" :key="index">{{item}}</span>
            </div>
          </div>
          <!-- <div class="a_preface">不知道写些什么</div> -->
          <div class="a_card" v-html="card.render"></div>
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
    getTime(time) {
      let date = new Date(time);
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 >= 10
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      let day = date.getDate() >= 10 ? date.getMonth() : "0" + date.getMonth();
      return year + "-" + month + "-" + day;
    },
    getData() {
      let that = this;
      this.loading = true;
      this.gl_ajax({
        url: "/getByID",
        method: "get",
        data: {
          library: "blog",
          _id: this.$route.query.id
        },
        success(res) {
          that.loading = false;
          if (res.data.status == 0) {
            that.card = res.data.data[0];
          }
        }
      });
    }
  },
  data() {
    return {
      time: "",
      card: {},
      loading: false
    };
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.article {
  width: 100%;
}
.articleContenter {
  width: 800px;
  margin: 0 auto;
}
ul {
  padding-left: 1em;
}
pre {
  padding: 0px !important;
  overflow: auto;
  //   font-size: 85%;
  line-height: 1.45;
  background: rgb(53, 45, 45);
  border-radius: 8px !important;
}
pre code {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}
h1::before,
h2::before,
h3::before,
h4::before,
h5::before {
  line-height: 24px;
  font-size: 20px;
  font-weight: bold;
  content: "#";
  color: #eb5055;
}
.main {
  margin-top: 85px;
  width: 100%;
  .a_main {
    height: 100%;
    padding-top: 40px;
    text-align: left;
    position: relative;
    .a_header {
      padding: 15px 0;
      border-bottom: 1px dashed #cccccc;
      .title {
        font-size: 22px;
        color: #222;
        font-weight: 400;
        line-height: 1.8;
      }
      .about {
        font-size: 12px;
        font-size: #999;
        margin-top: 12px;
        span {
          margin-right: 20px;
        }
      }
      .type {
        .t_button {
          margin-top: 14px;
          color: #fff;
          border: 1px solid #f16d71;
          border-radius: 15px;
          background: #f16d71;
          display: inline-block;
          margin-right: 10px;
          padding: 0 15px;
          height: 25px;
          line-height: 25px;
          transition: 0.4s;
          font-size: 12px;
          cursor: pointer;
        }
        .t_button:hover {
          color: #5f5f5f !important;
          border: 1px solid #f7f7f7;
          outline-style: none;
          background: #f7f7f7;
        }
      }
    }
    .a_preface {
      box-sizing: border-box;
      //   height: 50px;
      width: 100%;
      padding: 15px 20px;
      margin-top: 10px;
      background: #ccc;
      border-left: 3px solid #666;
      //   background: #666
    }
    .a_aside {
      position: fixed;
      top: 50%;
      right: 20%;
      border-left: 1px solid #cccccc;
      ul,
      li {
        list-style: none;
      }
      ul {
        li {
          height: 30px;
          min-width: 100px;
          width: auto;
          line-height: 30px;
          font-size: 15px;
          cursor: pointer;
          margin: 5px 0;
        }
      }
      .active {
        color: rgb(241, 37, 37);
      }
    }
  }
}
</style>
