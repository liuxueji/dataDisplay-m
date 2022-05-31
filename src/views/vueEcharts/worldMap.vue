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
    //获取国内数据
    api.getWroldData().then(res => {
      console.log('********' + res)
      let arr = []
      let world = res.data.retdata
      for (var i = 0; i < world.length; i++) {
        let obj = {}
        obj.name = world[i].xArea
        obj.value = world[i].confirm//累计确诊人数   curConfirm现在确诊人数
        arr.push(obj)
      }
      //显示地图
      this.$myChar.worldMap('main', arr)
    })

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

