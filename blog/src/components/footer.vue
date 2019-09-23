<template >
  <div class="footer">
    <div>
      <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">
        <a
          target="_blank"
          style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
          href="http://www.beian.miit.gov.cn/"
        >粤ICP备19112336号</a>
      </p>
    </div>
    <span class="line">|</span>
    <div style>
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060602001398"
        style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
      >
        <img src="../assets/recordIcon.png" style="float:left;" />
        <p
          style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;"
        >粤公网安备 44060602001398号</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  /* width: 1020px; */
  width: 100%;
  height: 120px;
  margin: 0 auto;
  line-height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  color: #939393;
}
.line {
  color: #939393;
  margin: 0 20px;
}
</style>