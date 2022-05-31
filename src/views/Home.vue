<template>
  <div class="home">
    <!-- 1.疫情图片 -->
    <div class="logo">
      <router-link to="/select"
                   class="select">
        选择城市=>{{city}}
      </router-link>
    </div>
    <!-- 2.病毒信息 -->
    <covinfo :covDesc='covDesc'
             :news='news' />
    <!-- 3.病毒导航 -->
    <div class="list">
      <div>
        <router-link to="/area">
          <img src="../assets/images/1.png"
               alt="" />
          <div>风险地区</div>
        </router-link>
      </div>
      <div>
        <router-link to="/hesuan">
          <img src="../assets/images/2.png"
               alt="" />
          <div>实时播报</div>
        </router-link>
      </div>
      <div>
        <router-link to="/prevention">
          <img src="../assets/images/3.png"
               alt="" />
          <div>防疫物资</div>
        </router-link>
      </div>
      <div>
        <router-link to="/travel">
          <img src="../assets/images/4.png"
               alt="" />
          <div>出行政策</div>
        </router-link>
      </div>
    </div>
    <!-- 4.中国疫情 -->
    <chinaMap />
    <!-- 5.世界疫情 -->
    <worldMap />
    <!-- 6.轮播图 -->
    <swiper />
  </div>
</template>

<script>
import covinfo from './covInfo/CovInfo.vue'
import api from '../api/index'
import chinaMap from './vueEcharts/chinaMap'
import worldMap from './vueEcharts/worldMap'
import swiper from './Swiper/swiper'
export default {
  data () {
    return {
      covDesc: {},
      news: [],
      city: localStorage.getItem('city')
    }
  },
  components: {
    covinfo,
    chinaMap,
    worldMap,
    swiper
  },
  created () {
    // 请求病毒接口
    api.getCovInfo().then((res) => {
      //1.病毒信息介绍---
      let data = res.data.newslist[0].desc;
      this.covDesc = {
        note1: data.note1,
        note2: data.note2,
        note3: data.note3,
        remark1: data.remark1,
        remark2: data.remark2,
        remark3: data.remark3,
      }
      console.log(this.covDesc);
      //2.疫情热点
      this.news = res.data.newslist[0].news
    })
  }
};
</script>
<style lang="less" scoped>
  .logo {
    position: relative;
    padding: 3rem;
    background: url("../assets/images/health.png") no-repeat;
    background-size: cover;
    .select {
      position: absolute;
      right: 0.2rem;
      top: 0.3rem;
      color: #fff;
      width: 2.5rem;
      height: 0.5rem;
      background-color: rgb(9, 60, 202);
      text-align: center;
      line-height: 0.5rem;
      border-radius: 0.2rem;
    }
  }
  .list {
    display: flex;
    > div {
      flex: 1;
      text-align: center;
      img {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }
</style>

