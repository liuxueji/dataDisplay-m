<template>
  <div>
    <div class="title">{{cityname}}市的疫情</div>
    <div class="container">
      <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
      <div id="main"
           style="width:5rem;height:10rem;"></div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  props: ["cityname"],
  mounted () {
    api.getCity(this.cityname).then((res) => {
      let arr = res.data.retdata.subList;
      let newArr = [];
      for (var i = 0; i < arr.length; i++) {
        let obj = {}
        obj.name = arr[i].city + '市'
        obj.value = arr[i].curConfirm//累计确诊人数   curConfirm现在确诊人数
        newArr.push(obj)
      }
      this.$myChar.cityMap('main', this.cityname, newArr)
      console.log(newArr);

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

