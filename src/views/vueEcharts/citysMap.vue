<template>
  <div>
    <div class="title">世界疫情</div>
    <div class="container">
      <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
      <div id="main"
           style="width:5rem;height:6rem;"></div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  mounted () {
    this.$myChar.cityMap('main', '内蒙古', [])
  }
}
</script>

<style scoped>
  .bar {
    display: flex;
    justify-content: space-between;
  }
  .container {
    margin: 0.2rem 1rem;
  }
  .title {
    margin-left: 0.2rem;
    margin-bottom: 0.2rem;
    font-size: 0.3rem;
    font-weight: bold;
    color: #666;
  }
  .title::before {
    content: "";
    border-left: 0.1rem solid rgb(9, 60, 202);
    font-size: 0.26rem;
    margin-right: 0.1rem;
  }
</style>

