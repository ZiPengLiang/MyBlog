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
          <div class="a_card markdown-body" v-html="card.render"></div>
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
  max-width: 800px;
  // max-width: 100%;
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

.main {
  margin-top: 55px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
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
        font-size: 14px;
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
.a_card {
  margin: 26px 0;
  font-size: 14px !important;
}
.a_card /deep/ img {
  max-width: 100%;
  box-sizing: content-box;
  background-color: #fff;
  margin: 30px auto;
  display: block;
  box-shadow: 0 0 2.6875rem rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
.a_card /deep/ p {
  margin-bottom: 16px;
}
.a_card /deep/ .hljs-comment {
  color: orange;
}
.a_card /deep/ blockquote {
  // font: 14px/22px normal helvetica, sans-serif;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0;
  padding-left: 15px;
  padding-top: 15px;
  padding-right: 10px;
  padding-bottom: 15px;
  border-left: 3px solid #ccc;
  background-color: #f1f1f1;
}
.a_card /deep/ blockquote p {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
}
.a_card /deep/ h3 {
  padding-bottom: 8px;
  border-bottom: 1px solid #eaecef;
  position: relative;
}
.a_card /deep/ h3::before {
  // content: "#";
  color: #eb5055;
  line-height: 24px;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: -15px;
}
.a_card /deep/ pre {
  padding: 0 !important;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  border-radius: 8px !important;
  margin-bottom: 16px;
  margin-top: 0px;
}
.a_card /deep/ .hljs {
  font-size: 16px;
  padding: 0.9em !important;
  -ms-overflow-style: auto;
  overflow-x: auto;
}
.a_card /deep/ .hljs::-webkit-scrollbar {
  // width: 3px !important;
  height: 8px !important;
}
.a_card /deep/ .hljs::-webkit-scrollbar-thumb {
  border-radius: 10px;
  // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: orange;
}
.a_card /deep/ .hljs::-webkit-scrollbar-track {
  border-radius: 0;
  // background: orange;
}
</style>
