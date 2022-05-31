<template>
  <div class="area">
    <div class="bg">
      <div class="container">
        <div>全国风险地区汇总:高风险<span class="highLength">{{high.length}}</span> 中风险<span class="midLength">{{mid.length}}</span>个</div>
        <template>
          <div class="highTitle"><img src="../../assets/images/high.png"
                 alt="">
            高风险区{{ high.length }}个</div>
          <ul class="list">
            <li v-for="(item, index) in high"
                :key="index">
              {{ item }}
            </li>
          </ul>
        </template>
        <template>
          <div class="midTitle"><img src="../../assets/images/mid.png"
                 alt="">
            高风险区{{ high.length }}个</div>
          <ul class="list">
            <li v-for="(item, index) in mid"
                :key="index">
              {{ item }}
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data () {
    return {
      high: [],//高风险区域
      mid: []//中风险区域
    }
  },
  created () {
    api.getCovInfo().then((res) => {
      console.log(res.data.newslist[0]);
      this.high = res.data.newslist[0].riskarea.high
      this.mid = res.data.newslist[0].riskarea.mid

    })
  }
}
</script>

<style lang="less" scoped>
  .area {
    background-color: #f5f5f5;
  }
  .bg {
    height: 3.6rem;
    background: url("../../assets/images/area.png") no-repeat;
    background-size: cover;
    padding-top: 3.6rem;
  }
  .container {
    padding: 0.3rem;
    margin: 0 0.3rem 0.5rem;
    background-color: #fff;
    border-radius: 0.3rem;
    .highLength {
      font-weight: 600;
      color: red;
    }
    .midLength {
      font-weight: 600;
      color: rgb(240, 205, 49);
    }
    .list {
      li {
        margin-bottom: 0.2rem;
        color: #333;
        background: #f7f7f7;
        padding: 0.1rem;
        border-radius: 0.1rem;
        letter-spacing: 0.01rem;
        line-height: 0.5rem;
      }
    }
    .highTitle {
      padding-top: 0.5rem;
      font-weight: 600;
      color: red;
      img {
        width: 0.33rem;
        vertical-align: top;
      }
    }
    .midTitle {
      padding-top: 0.5rem;
      font-weight: 600;
      color: rgb(240, 205, 49);
      img {
        width: 0.33rem;
        vertical-align: top;
      }
    }
  }
</style>
