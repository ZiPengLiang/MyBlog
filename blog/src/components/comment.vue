<template>
  <div class="comment">
    <el-container>
      <el-main>
        <!-- 最新发布 -->
        <div class="newest">
          <ul class="new">
            <li v-for="(item,index) in data" :key="index">
              <div class="n_img" @click="gotoArticle(item)">
                <img src alt />
              </div>
              <div class="n_article">
                <p class="p_title" @click="gotoArticle(item)">{{item.title}}</p>
                <p class="about">
                  <span>
                    <i class="el-icon-time"></i>
                    {{item.time}}
                  </span>
                  <span>
                    <i class="el-icon-view"></i>
                    {{item.vistor}}
                  </span>
                  <span>
                    <i class="el-icon-aim"></i>
                    {{item.type}}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="paging">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize*1"
            layout="prev, pager, next, jumper"
            :total="100"
          ></el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  props: ["data", "pageSize"],
  methods: {
    gotoArticle(item) {
      this.$router.push({
        name: "Article",
        query: {
          id: item.id
        }
      });
    },
    // 页数修改
    handleSizeChange() {},
    //页码修改
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    }
  },
  data() {
    return {
      // 当前页数
      currentPage: 1
    };
  }
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
}
</style>