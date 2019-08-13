<template>
  <div class="myBlog">
    <header>
      <blog-header active="0" />
    </header>
    <div class="main">
      <div class="con">
        <div class="comment">
          <el-container>
            <el-main>
              <!-- 最新发布 -->
              <div class="newest">
                <ul class="new">
                  <li v-for="i in 12" :key="i">
                    <div class="n_img" @click="gotoArticle">
                      <img src alt />
                    </div>
                    <div class="n_article">
                      <p class="p_title" @click="gotoArticle">vue+echarts 动态绘制图表以及异步加载数据</p>
                      <p class="about">
                        <span>
                          <i class="el-icon-time"></i>
                          2019-6-27
                        </span>
                        <span>
                          <i class="el-icon-view"></i>
                          888
                        </span>
                        <span>
                          <i class="el-icon-aim"></i>
                          技术推荐
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </el-main>
          </el-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import blogHeader from "./blogHeader";
export default {
  components: {
    blogHeader: resolve => require(["./blogHeader"], resolve),
    banner: resolve => require(["./banner"], resolve)
  },
  methods: {
    gotoArticle() {
      this.$router.push({
        name: "Article"
      });
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss"  scoped>
ul,
li {
  list-style: none;
}
p {
  text-align: left;
}

.myBlog {
  background: #fff;
  header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .main {
    margin-top: 85px;

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
        ul {
          // height: 1280px;
          width: 100%;
          display: flex;
          justify-content: center;
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
      .title {
        box-sizing: border-box;
        height: 46px;
        padding: 11px 15px 14px;
        border-bottom: 1px solid #ccc;
        background: #fbfbfb;
      }
    }
  }
}
</style>

