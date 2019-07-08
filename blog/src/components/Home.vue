<template>
  <div class="myBlog">
    <header>
      <blog-header/>
    </header>
    <div class="main">
      <div class="con">
        <!-- 轮播图 -->
        <banner/>
        <div class="comment">
          <el-container>
            <el-main>
              <!-- 技术推荐 -->
              <div class="recommend">
                <h4>技术推荐</h4>
                <ul>
                  <li v-for="i in 6" :key="i">
                    <div class="j_img"></div>
                    <div class="j_comment">
                      <p class="j_title">哈佛大学用这12张图，教育了10亿人_心灵鸡汤</p>
                      <p class="j_article">很多人把感恩当成一种付出，其实感恩本身就是一种幸福。</p>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- 最新发布 -->
              <div class="newest">
                <h4>最新发布</h4>
                <ul>
                  <li v-for="i in 10" :key="i">
                    <div class="n_img">1</div>
                    <div class="n_article">
                      <p class="p_title">vue+echarts 动态绘制图表以及异步加载数据</p>
                      <p
                        class="p_article"
                      >背景：vue写的后台管理，需要将表格数据绘制成图表（折线图，柱状图），图表数据都是通过接口请求回来的。背景：vue写的后台管理，需要将表格数据绘制成图表（折线图，柱状图），图表数据都是通过接口请求回来的。背景：vue写的后台管理，需要将表格数据绘制成图表（折线图，柱状图），图表数据都是通过接口请求回来的。</p>
                      <p class="about">
                        <span>
                          <i class="el-icon-user"></i>
                          梁梓棚
                        </span>
                        <span>
                          <i class="el-icon-time"></i>
                          2019-6-27
                        </span>
                        <span>
                          <i class="el-icon-view"></i>
                          888次浏览
                        </span>
                        <span>
                          <i class="el-icon-aim"></i>
                          个人博客：技术推荐
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </el-main>
            <el-aside width="300px">
              <div style="padding-left:10px">
                <div class="hotTags">
                  <h3 class="title">热门标签</h3>
                </div>
                <div class="articles">
                  <h3 class="title">推荐文章</h3>
                </div>
              </div>
            </el-aside>
          </el-container>
          <el-backtop :bottom="100"></el-backtop>
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
.con {
  width: 1200px;
  margin: 0 auto;
}
.myBlog {
  background: #f1f1f1;
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
      //技术推荐
      .recommend {
        padding-top: 10px;
        padding-left: 20px;
        height: 400px;
        background: #fff;
        ul {
          li {
            float: left;
            width: 400px;
            box-sizing: border-box;
            height: 110px;
            margin: 5px;
            background: #fff;
            padding-left: 10px;
            padding-top: 15px;
            border: 1px solid #ccc;
            cursor: pointer;
            .j_img {
              width: 110px;
              height: 80px;
              float: left;
            }
            .j_comment {
              width: 250px;
              height: 80px;
              margin-left: 10px;
              float: left;

              .j_title {
                font-size: 12px;
                color: #555;
              }
              .j_title:hover {
                color: #81c53f;
              }
              .j_article {
                font-size: 10px;
                line-height: 14px;
                color: #999;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 50px;
                margin-top: 5px;
              }
            }
          }
        }
      }
      //最新发布
      .newest {
        margin-top: 15px;

        h4 {
          width: 100%;
          // height: 40px;
          // margin-bottom: 5px;
        }
        ul {
          li {
            // border-radius: 3%;
            border-left: 3px solid #fff;
            width: 99%;
            height: 180px;
            padding-left: 20px;
            padding-top: 20px;
            background: #fff;
            margin-bottom: 10px;
            .n_img {
              width: 220px;
              height: 150px;
              float: left;
              cursor: pointer;
            }

            .n_article {
              float: left;
              height: 150px;
              width: 570px;
              margin-left: 20px;
              p {
                text-align: left;
              }
              .p_title {
                font-size: 16px;
                color: #555;
                margin-bottom: 5px;
                cursor: pointer;
              }
              .p_title:hover {
                color: #81c53f;
              }
              .p_article {
                width: 100%;
                height: 48px;
                font-size: 14px;
                line-height: 24px;
                // display:-webkit-box;
                // -webkit-box-orient:vertical;
                // -webkit-line-clamp:3;
                overflow: hidden;
                text-overflow: ellipsis;
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
          li:hover {
            border-left: 3px solid #81c53f;
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
      //热门标签
      .hotTags {
        width: 290px;
        height: 220px;
        background: #fff;
      }
      .articles {
        margin-top: 10px;
        width: 290px;
        height: 450px;
        background: #fff;
      }
    }
  }
}
</style>

