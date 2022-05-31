<template>
  <div>
    <div class="title">国内疫情</div>
    <div class="container">
      <div class="bar">
        <van-button class="nowMain"
                    type="default"
                    @click="flag=1">现存确诊</van-button>
        <van-button class="main2"
                    type="default"
                    @click="flag=2">累计确诊</van-button>
      </div>
      <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
      <div v-show="flag==2"
           id="main2"
           style="width:5rem;height:6rem;"></div>
      <div v-show="flag==1"
           id="nowMain"
           style="width:5rem;height:6rem;"></div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data () {
    return {
      flag: 1
    }
  },
  methods: {

  },
  mounted () {
    //获取国内数据
    api.getChinaData().then(res => {
      let arr = []
      let nowArr = []
      let citys = res.data.retdata
      for (var i = 0; i < citys.length; i++) {
        let obj = {}
        obj.name = citys[i].xArea
        obj.value = citys[i].confirm//累计确诊人数   curConfirm现在确诊人数
        let nowObj = {}
        nowObj.name = citys[i].xArea
        nowObj.value = citys[i].curConfirm
        nowArr.push(nowObj)
        arr.push(obj)
      }
      //显示地图
      this.$myChar.chinaMap('main2', arr)
      this.$myChar.chinaMap('nowMain', nowArr)
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
    margin-top: 0.5rem;
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

