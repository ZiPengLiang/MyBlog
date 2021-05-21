<template>
  <div class="comment">
    <el-container v-loading="loading">
      <el-main v-if="blogData">
        <!-- 最新发布 -->
        <div class="newest">
          <ul class="new">
            <li v-for="(item, index) in blogData" :key="index">
              <div class="n_img" @click="gotoArticle(item)">
                <img v-lazy="base + '/' + item.base64" alt />
              </div>
              <div class="n_article">
                <p class="p_title" @click="gotoArticle(item)">
                  {{ item.title }}
                </p>
                <p class="about">
                  <span>
                    <i class="el-icon-time"></i>
                    {{ getTime(item.date) }}
                  </span>
                  <span>
                    <i class="el-icon-view"></i>
                    {{ item.watch }}
                  </span>
                  <span>
                    <i class="el-icon-aim"></i>
                    {{
                      item.classification == "summary" ? "知识总结" : "生活牢骚"
                    }}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="paging">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="pageno"
            :page-size="pagesize * 1"
            layout="prev, pager, next, jumper"
            :total="count"
          ></el-pagination>
        </div>
      </el-main>
      <el-main v-else>
        <div class="noData">
          <p>Sorry,暂无数据</p>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { base } from "../comment/api/server";
export default {
  props: ["data", "pagesize"],
  watch: {
    data: {
      handler(val, oldVal) {
        console.log("data数据发生变化 ", this.data); //但是这两个值打印出来却都是一样的
        this.getData();
      },
      deep: true,
    },
  },
  methods: {
    gotoArticle(item) {
      let that = this;
      this.gl_ajax({
        method: "post",
        url: "/updata",
        data: {
          library: "blog",
          _id: item._id,
          data: {
            watch: item.watch + 1,
          },
        },
        success: function (res) {
          console.log(res);
          that.$router.push({
            name: "Article",
            query: {
              id: item._id,
            },
          });
        },
        error: function (err) {
          console.log("err", err);
        },
      });
    },

    //页码修改
    handleCurrentChange(val) {
      this.pageno = val;
      this.getData();
    },

    getTime(time) {
      let date = new Date(time);
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 >= 10
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
      return year + "-" + month + "-" + day;
    },
    getData() {
      let that = this;
      this.loading = true;
      this.gl_ajax({
        url: "/getData",
        method: "get",
        data: {
          pageno: that.pageno,
          pagesize: that.pagesize,
          data: JSON.stringify(that.data),
          library: "blog",
        },
        success(res) {
          that.loading = false;
          if (res.data.status == 0) {
            that.count = res.data.count;
            that.blogData = res.data.data;
          } else {
            that.blogData = null;
          }
        },
      });
    },
  },
  mounted() {
    // console.log("base", base);
    this.base = base;
    this.getData();
  },
  data() {
    return {
      // 当前页数
      pageno: 1,
      count: 1,
      loading: false,
      blogData: [],
      base: "",
    };
  },
};
</script>
<style lang="scss"  scoped>
.comment {
  h4,
  h3 {
    font-weight: normal;
    text-align: left;
    margin: 0;
    width: 100%;
    // background: #fbfbfb;
  }
  //最新发布
  .newest {
    margin-top: 15px;
    // min-height: 90%;
    ul {
      // height: 1280px;
      width: 100%;
      display: flex;
      // justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      li {
        // border-radius: 3%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.17);
        border-radius: 10px;
        width: 280px;
        height: 340px;
        background: #fff;
        margin: 20px 30px;
        overflow: hidden;
        .n_img {
          width: 100%;
          height: 230px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .n_article {
          float: left;
          flex: 1;
          width: 100%;
          box-sizing: border-box;
          padding: 10px;
          p {
            text-align: left;
          }
          .p_title {
            font-size: 16px;
            color: #555;
            margin-bottom: 5px;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .p_title:hover {
            color: #81c53f;
          }

          .about {
            font-size: 12px;
            font-size: #999;
            margin-top: 30px;
            span {
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
  .paging {
    margin-top: 20px;
  }
  .title {
    box-sizing: border-box;
    height: 46px;
    padding: 11px 15px 14px;
    border-bottom: 1px solid #ccc;
    background: #fbfbfb;
  }
  .noData {
    width: 100%;
    // height: 300px;
    height: 430px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: #515a6e;
  }
  @media (max-width: 1060px) {
    .newest {
      ul {
        justify-content: center;
      }
    }
  }
}
</style>