<template>
  <div class="container">
    <div class="bg">
      <!-- 物资内容 -->
      <div class="wuzi">
        <van-tabs v-model="active">
          <van-tab v-for="(item,index) in arr"
                   :key="index"
                   :title="item.title">
            <img :src="item.img"
                 width="100%"
                 alt="">
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../../assets/images/jiujing.png'
import img2 from '../../assets/images/kouzhao.png'
export default {
  data () {
    return {
      active: 0,
      arr: [
        {
          img: img1,
          title: '消毒剂'
        },
        {
          img: img2,
          title: '口罩'
        }
      ]
    };
  },
};
</script>

<style lang='less' scoped>
  .container {
    background-color: #f5f5f5;
  }
  .bg {
    background: url("../../assets/images/wuzi.png") no-repeat;
    background-size: contain;
  }
  .wuzi {
    padding-top: 3rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
</style>