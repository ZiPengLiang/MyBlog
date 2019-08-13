<template>
  <div class="Diary">
    <header>
      <blog-header active="3" />
    </header>
    <div class="main">
      <div class="con">
        <div class="headerTitle">
          <i class="el-icon-location-outline"></i>
          <router-link to="/home">首页</router-link>&gt; 个人日记
        </div>
        <div class="diaryMain">
          <div class="diaryCard" v-for="i in 10" :key="i">
            <div class="leftImf">
              <img src="https://cdn.duanliang920.com/uploads/141008/1-14100QG333948.jpg" alt />
            </div>
            <div class="rightComment">
              <div class="comment">不知道写什么，我来记录下自己的职业生涯的</div>
              <div class="time">2019-07-31</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-backtop :bottom="100"></el-backtop>
  </div>
</template>
<script>
export default {
  components: {
    blogHeader: resolve => require(["./blogHeader"], resolve)
  }
};
</script>
<style lang="scss" scoped>
.Diary {
  background: #f1f1f1;
  header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .main {
    margin-top: 85px;
    background: #fff;
    padding-top: 40px;
    .headerTitle {
      // margin-top: 20px;
      text-align: left;
      font-size: 18px;
      color: #666;
      a {
        font-size: 18px;
        color: #666;
      }
      // color: #3472ef;
    }
    .diaryMain {
      margin-top: 20px;
      text-align: left;
      .diaryCard {
        height: 130px;
        // position: relative;
        // transition: all 1s;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .leftImf {
          height: 100px;
          width: 100px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .rightComment {
          box-sizing: border-box;
          height: 100px;
          width: 1000px;
          border: 1px solid #ccc;
          padding: 10px;
          position: relative;
          .comment {
            font-size: 14px;
            color: #10200a;
          }
          .time {
            color: #fff;
            background: #ee5a5a;
            height: 25px;
            width: 85px;
            font-size: 14px;
            line-height: 25px;
            text-align: center;
            border-radius: 5px;
            position: absolute;
            bottom: 5px;
            right: 5px;
          }
        }
      }
    }
  }
}
</style>
